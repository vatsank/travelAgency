import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';

@Injectable({
  providedIn: 'root'
})
export class TourAdvisorService {

   advise: BehaviorSubject<string> = new BehaviorSubject<string>('Jan-March');

   myadvice = this.advise.asObservable();


  constructor() { }

   changeAdvice(changedAdvice: string) {

         this.advise.next(changedAdvice);
   }
}
