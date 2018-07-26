import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], field: any, value: any): any[] {

    if (!collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }


     if (field !== 'mobileNumber') {

      return collection.filter(list =>
        list[field].toLowerCase().includes(value.toLowerCase()));

     } else {

        return collection.filter(item => item[field] == value);
     }

  }

}
