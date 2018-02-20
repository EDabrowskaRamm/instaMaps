import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHashPage } from './search-hash';

@NgModule({
  declarations: [
    SearchHashPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchHashPage),
  ],
})
export class SearchHashPageModule {}
