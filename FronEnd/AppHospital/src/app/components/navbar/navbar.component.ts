import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  app_name="HOSPITALES";
  isLogged:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(){}
}
