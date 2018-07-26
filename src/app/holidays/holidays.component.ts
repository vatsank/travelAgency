import { AsiaTourComponent } from './../asia-tour/asia-tour.component';
import { IndiaTourComponent } from './../india-tour/india-tour.component';
import { Weekendtrip } from './../weekendtrip';
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';
import { Tour } from '../tour';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit, AfterContentInit {

  

  tours = new Array<Tour[]>();
  hide = true;

  weekEndTripList: Weekendtrip[];
  pickUpPoints: string[];
  qty = 1;
  response: any;
  @ViewChild(IndiaTourComponent) indiaTour: IndiaTourComponent;
  @ViewChild(AsiaTourComponent) asiaTour: AsiaTourComponent;


  constructor(private service: ShowtripsService) { }

  ngAfterContentInit(): void {


    this.tours.push(this.indiaTour.getIndianTours());

    this.tours.push(this.asiaTour.getAsiaTours());

   }

  ngOnInit() {

  //   this.service.findAllWithPromise().then(
  //  res => this.weekEndTripList = res ).catch(err => console.log(err.error));


    this.service.find().subscribe(resp => this.weekEndTripList = resp);

    // this.service.findAll().subscribe(resp => {

    //   this.weekEndTripList = <Weekendtrip[]> (resp.body);

    //     console.log(resp.status);
    //     console.log(resp.headers.get('content-type'));
    // });
  }

  onChange(val) {

    this.response = val;

  }
  control(){

    
  }
  show(destination) {

    this.hide = false;
    if ( destination === 'vijayawada'){
     this.pickUpPoints = ['Miyapur', 'Lingampally', 'Hitech'];
     } else {
      this.pickUpPoints = ['JNTU', 'DilsukhNagar', 'Madhapur'];

     }
  }
}
