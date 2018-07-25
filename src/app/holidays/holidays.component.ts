import { Weekendtrip } from './../weekendtrip';
import { Component, OnInit } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent implements OnInit {

  weekEndTripList: Weekendtrip[];
  constructor(private service: ShowtripsService) { }

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

}
