import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, animation, style } from '@angular/animations';

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
    CatMinorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
