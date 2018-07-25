import { TourAdvisorService } from './../tour-advisor.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';

@Component({
  selector: 'app-india-tour',
  templateUrl: './india-tour.component.html',
  styleUrls: ['./india-tour.component.css']
})
export class IndiaTourComponent implements OnInit {

  indianTours: Tour[];
  bestTime: string;
  constructor(private service: TourAdvisorService) {

    this.indianTours = [ 
      {tourName:'Beautiful Kashmir', 
      description: 'Lakes and Garden in Kashmir',
      image: 'assets/images/kashmir.jpg', price: 45000},

      {tourName:'Beaches of Andaman', description: 'Lovely Beaches and Islands',
      image: 'assets/images/andaman.jpg', price: 55000},

    ];
   }

  ngOnInit() {

       this.service.myadvice.subscribe(value =>{
          this.bestTime = value;

       });
     
  }

    getIndianTours() {
       return this.indianTours;
    }

}
