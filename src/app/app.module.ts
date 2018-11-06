import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, animation, style } from '@angular/animations';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaHeaderComponent } from './social-media-header/social-media-header.component';
import 'hammerjs';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MeganWillardComponent } from './profiles/megan-willard.component';
import { JeriHalperinComponent } from './profiles/jeri-halperin.component';
import { AlexisRussellComponent } from './profiles/alexis-russell.component';
import { CatMinorComponent } from './profiles/cat-minor.component';
import { WandaFennernComponent } from './profiles/wanda-fennern.component';
import { LisaStarkComponent } from './profiles/lisa-stark.component';
import { SeannaFeijoComponent } from './profiles/seanna-feijo.component';
import { SarahAlbertsComponent } from './profiles/sarah-alberts.component';
import { AnanyaPramanikComponent } from './profiles/ananya-pramanik.component'
import { OurServicesComponent } from './our-services/our-services.component';
import { GgmapsComponent } from './ggmaps/ggmaps.component';
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SocialMediaHeaderComponent,
    MeetTheCrewComponent,
    ProfilesComponent,
    MeganWillardComponent,
    JeriHalperinComponent,
    AlexisRussellComponent,
    CatMinorComponent,
    WandaFennernComponent,
    SarahAlbertsComponent,
    LisaStarkComponent,
    SeannaFeijoComponent,
    AnanyaPramanikComponent,
    OurServicesComponent,
    GgmapsComponent,
    AreasWeServiceComponent,
    TestimonialsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAw_G4z70opYSIbFHwe1ftzsW8tiybhBCc'
  })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
