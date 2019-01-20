import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './favourite.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [{
  path: '',
  component: FavouriteComponent
}];

@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class FavouriteModule { }
