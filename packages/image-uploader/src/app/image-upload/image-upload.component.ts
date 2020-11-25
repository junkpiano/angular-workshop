import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageUploadService} from './image-upload.service';
import Image from './Image';

class ImageSnippet {
  constructor( src: string, public file: File) {
  }
}

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})

// eslint-disable-next-line require-jsdoc
export class ImageUploadComponent implements OnInit {
  @ViewChild('imageUpload') imageUpload;

  selectedFile: ImageSnippet | undefined;
  uploadedImages: Image[] | undefined;

  constructor(private imageService: ImageUploadService) {
  }

  ngOnInit(): void {
    this.imageService.loadImages().subscribe(
        (res) => {
          this.uploadedImages = res;
        },
    );
  }

  selectImage(event: any) {
    this.selectedFile = new ImageSnippet(event.target.result,
        event.target.files[0]);
  }

  uploadImage() {
    if (!this.selectedFile) {
      return;
    }

    const file = this.selectedFile.file;
    this.imageService.uploadImage(file).subscribe(
        (res) => {
          console.log(res);
          this.imageService.loadImages().subscribe(
              (res) => {
                this.uploadedImages = res;
              },
          );
          this.imageUpload.nativeElement.value = '';
        },
        (err) => {
          console.log(err);
        },
    );
  }
}
