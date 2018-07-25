import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate = new Date();
  logo: string;
  rightLogo: string;
  title = 'Sri Tours and Travels';
  constructor() {
      this.logo = '../assets/images/logo.jpg';
      this.rightLogo = '../assets/images/rightLogo.jpg';
    console.log('Header component initlized');
  }

  ngOnInit() {

    console.log('Header component Ng On Init Called');

  }

}
