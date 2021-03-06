import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'headlines',
    loadChildren: './headlines/headlines.module#HeadlinesModule'
  },
  {
    path: 'sources',
    loadChildren: './sources/sources.module#SourcesModule'
  },
  {
    path: 'favourite',
    loadChildren: './favourite/favourite.module#FavouriteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
