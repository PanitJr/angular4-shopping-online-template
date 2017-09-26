import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() { }
  show: boolean = true;
  ngOnInit() {
    
  }
  login(username,password){
    this.show = !this.show;
  }
  logout(){
    this.show = !this.show;
  }
}
