import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
      ExploreComponent
    ]
})
export class ExploreModule { }
