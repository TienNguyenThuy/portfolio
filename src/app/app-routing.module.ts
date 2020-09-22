import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlogComponent} from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
