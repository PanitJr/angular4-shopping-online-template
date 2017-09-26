import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home',   loadChildren: 'app/home/home.module#HomeModule', },
  //{ path: 'crisis-center', component: CrisisListComponent },
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  //if not match any paths will go to **  
  //{ path: '**',   redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/