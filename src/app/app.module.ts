import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { UserService } from './user.service';
import { AlternateCasePipePipe } from './alternate-case-pipe.pipe';
import { ListeAnimauxComponent } from './liste-animaux/liste-animaux.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StarPipePipe } from './star-pipe.pipe';
import { BilleterieComponent } from './billeterie/billeterie.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    ColorSelectorComponent,
    AlternateCasePipePipe,
    ListeAnimauxComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    StarPipePipe,
    BilleterieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
