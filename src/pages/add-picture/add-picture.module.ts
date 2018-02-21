import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPicturePage } from './add-picture';

@NgModule({
  declarations: [
    AddPicturePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPicturePage),
  ],
})
export class AddPicturePageModule {}
