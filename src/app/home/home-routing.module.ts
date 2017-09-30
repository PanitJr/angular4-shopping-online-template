import { HomeResearchComponent } from './home-research/home-research.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeAboutHoneyComponent } from './home-about-honey/home-about-honey.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';
import { HomeQuotationComponent } from './home-quotation/home-quotation.component';
import { HomeOpenfarmComponent } from './home-openfarm/home-openfarm.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home.component';

const homeRoutes: Routes = [
  { path: '',  
    component: HomeComponent ,
    children: [
    {
      path: '',
      children: [
        { path: 'product', component: HomeProductComponent },
        { path: 'about-us', component: HomeAboutUsComponent },
        { path: 'research', component: HomeResearchComponent },
        { path: 'about-honey', component: HomeAboutHoneyComponent },
        { path: 'news-update', component: HomeNewsComponent },
        { path: 'contact-us', component: HomeContactUsComponent },
        { path: 'quotatuon', component: HomeQuotationComponent },
        { path: 'open-farm', component: HomeOpenfarmComponent },
        { path: '', component: HomeDashboardComponent }
      ]
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }