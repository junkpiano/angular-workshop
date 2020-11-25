import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import Image from './Image';

@Injectable()
export class ImageUploadService {
  constructor(private http: HttpClient) {
  }

  public loadImages(): Observable<Image[]> {
    return this.http.get('http://localhost:3000/images')
        .pipe(map((json: any) => json.map((item: any) => new Image('http://localhost:3000/' + item.url))));
  }

  public uploadImage(image: File): Observable<string | any> {
    const formData = new FormData();

    console.log('test');

    formData.append('image', image);

    return this.http
        .post('http://localhost:3000/images', formData)
        .pipe(map((json: any) => json.message));
  }
}
