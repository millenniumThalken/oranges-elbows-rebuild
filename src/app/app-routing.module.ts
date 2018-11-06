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
import { SarahAlbertsComponent } from './profiles/sarah-alberts.component';
import { SeannaFeijoComponent } from './profiles/seanna-feijo.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AnanyaPramanikComponent } from './profiles/ananya-pramanik.component';

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
    path: 'profiles/megan-willard',
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
    path: 'profiles/jeri-halperin',
    component: JeriHalperinComponent
  },
  {
    path: 'profiles/alexis-russell',
    component: AlexisRussellComponent
  },
  {
    path: 'profiles/cat-minor',
    component: CatMinorComponent
  },
  {
    path: 'profiles/wanda-fennern',
    component: WandaFennernComponent
  },
  {
    path: 'profiles/lisa-stark',
    component: LisaStarkComponent
  },
  {
    path: 'profiles/seanna-feijo',
    component: SeannaFeijoComponent
  },
  {
    path: 'profiles/sarah-alberts',
    component: SarahAlbertsComponent
  },
  {
    path: 'profiles/ananya-pramanik',
    component: AnanyaPramanikComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
