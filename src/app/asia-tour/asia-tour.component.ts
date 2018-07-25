import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia-tour',
  templateUrl: './asia-tour.component.html',
  styleUrls: ['./asia-tour.component.css']
})
export class AsiaTourComponent implements OnInit {
  asiaTour: { tourName: string; description: string; image: string; price: number; }[];

  constructor() { 

  this.asiaTour = [ 
    {tourName:'Singapore', 
    description: 'Shopping Malls of Singapore',
    image: 'assets/images/singapore.jpg', price: 75000},

    {tourName:'Beaches of Srilanka', description: 'Lovely Beaches and Islands',
    image: 'assets/images/srilanka.jpg', price: 65000},

  ];
 }

ngOnInit() {

}

  getAsiaTours() {
     return this.asiaTour;
  }

}
