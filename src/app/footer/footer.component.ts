import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  partners: string[];
  social: string[];
  
  constructor() {

    this.partners = ['Uber', 'Taj Hotel', 'NDTV' , 'IndiGo'];
    this.social = ['instagram', 'FaceBook', 'Twitter','Whatsapp'];
  }

  ngOnInit() {
  }

}
