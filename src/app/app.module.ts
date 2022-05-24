import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionupComponent } from './sectionup/sectionup.component';
import { CenterComponent } from './center/center.component';
import { ServiceComponent } from './service/service.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionupComponent,
    CenterComponent,
    ServiceComponent,
    OurteamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
