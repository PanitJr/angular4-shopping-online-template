import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private globalService :GlobalService) { globalService.showNavBar = true}

  ngOnInit() {
  }

  signUp(){
    this.router.navigate(['/home']);
  }
  signIn(){
    this.router.navigate(['/home']);
  }
  facebookAuth(){
    this.router.navigate(['/home']);
  }
  googleAuth(){
    this.router.navigate(['/home']);
  }

}
