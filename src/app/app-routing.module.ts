import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { MeganWillardComponent } from './profiles/megan-willard.component';
import { JeriHalperinComponent } from './profiles/jeri-halperin.component';
import { AlexisRussellComponent } from './profiles/alexis-russell.component';
import { CatMinorComponent } from './profiles/cat-minor.component';

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
  },
  {
    path: 'jeri-halperin',
    component: JeriHalperinComponent
  },
  {
    path: 'alexis-russell',
    component: AlexisRussellComponent
  },
  {
    path: 'cat-minor',
    component: CatMinorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
