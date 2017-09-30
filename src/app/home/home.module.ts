import { HomeButtonComponent } from './home-button/home-button.component';
import { HomeResearchComponent } from './home-research/home-research.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeAboutHoneyComponent } from './home-about-honey/home-about-honey.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';
import { HomeQuotationComponent } from './home-quotation/home-quotation.component';
import { HomeOpenfarmComponent } from './home-openfarm/home-openfarm.component';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HomeComponent }  from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
    
  ],
  declarations: [
    HomeComponent,
    HomeButtonComponent,
    HomeResearchComponent,
    HomeProductComponent,
    HomeDashboardComponent,
    HomeAboutUsComponent,
    HomeNewsComponent,
    HomeAboutHoneyComponent,
    HomeContactUsComponent,
    HomeQuotationComponent,
    HomeOpenfarmComponent
  ],
  providers: [ ]
})
export class HomeModule {}