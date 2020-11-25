import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageUploadComponent} from './image-upload.component';
import {ImageUploadModule} from './image-upload.module';

describe('ImageUploadComponent', () => {
  let component: ImageUploadComponent;
  let fixture: ComponentFixture<ImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageUploadComponent],
      imports: [ImageUploadModule],
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
