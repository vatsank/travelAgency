import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit , OnDestroy{
 
 
   val: string;
  details: string;
  subs: Subscription;

  places: Map<string, string> ;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.places = new Map<string, string>();
    this.places.set('manali', 'wonderfulplace wind surfing');
    this.places.set('hills', 'Nice Place for trekking');

  }
  ngOnInit() {
    this.subs =  this.route.params.subscribe(routParam => {
      this.val = routParam['code'];
    if (this.val !== undefined)  {
      this.details = this.places.get(this.val);
    }
  }
    );

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
   }
}
