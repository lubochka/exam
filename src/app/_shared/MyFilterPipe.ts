import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], field:string, value:boolean): any {
      // console.log(items, field,value);
        if (!items || !field) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out

          return items.filter(item => item[field]==value);


    }
}
