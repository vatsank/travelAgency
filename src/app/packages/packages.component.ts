import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  link1 = 'assets/images/adventure.jpg';
  link2 = 'assets/images/heritage.jpg';
  link3 = 'assets/images/divine.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
