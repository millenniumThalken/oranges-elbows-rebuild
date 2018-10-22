import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { MeganWillardComponent } from './profiles/megan-willard.component';
import { JeriHalperinComponent } from './profiles/jeri-halperin.component';
import { AlexisRussellComponent } from './profiles/alexis-russell.component';
import { CatMinorComponent } from './profiles/cat-minor.component';
import { WandaFennernComponent } from './profiles/wanda-fennern.component';
import { LisaStarkComponent } from './profiles/lisa-stark.component';
import { SeannaFeijoComponent } from './profiles/seanna-feijo.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component'

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
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'megan-willard',
    component: MeganWillardComponent
  },
  {
    path: 'areas-we-service',
    component: AreasWeServiceComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
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
  },
  {
    path: 'wanda-fennern',
    component: WandaFennernComponent
  },
  {
    path: 'lisa-stark',
    component: LisaStarkComponent
  },
  {
    path: 'seanna-feijo',
    component: SeannaFeijoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
