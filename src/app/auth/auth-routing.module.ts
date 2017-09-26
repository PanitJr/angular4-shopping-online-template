import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent }  from './auth.component';

const authComponent: Routes = [
  { path: 'auth',  component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authComponent)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }