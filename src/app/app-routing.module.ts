import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore/explore.component';

const routes: Routes = [
  {path: 'explore', component: ExploreComponent},
  { path: '**', component: ExploreComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
