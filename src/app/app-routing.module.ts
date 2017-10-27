import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
