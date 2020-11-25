import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImageUploadComponent} from './image-upload/image-upload.component';

const routes: Routes = [
  {path: 'image-upload', component: ImageUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// eslint-disable-next-line require-jsdoc
export class AppRoutingModule { }
