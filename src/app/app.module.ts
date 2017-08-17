import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule }        from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { I18nComponent } from './i18n/i18n.component';
import { CartComponent } from './cart/cart.component';
import { SearcherComponent } from './searcher/searcher.component';
import { DepartmentDropdownComponent } from './nav-bar/department-dropdown/department-dropdown.component';
import { NavBarPromtionComponent } from './nav-bar/nav-bar-promtion/nav-bar-promtion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    I18nComponent,
    CartComponent,
    SearcherComponent,
    DepartmentDropdownComponent,
    NavBarPromtionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
