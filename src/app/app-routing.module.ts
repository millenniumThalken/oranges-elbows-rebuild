import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { MeganWillardComponent } from './profiles/megan-willard.component'

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'meet-the-crew',
    component: MeetTheCrewComponent
  },
  {
    path: 'megan-willard',
    component: MeganWillardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
