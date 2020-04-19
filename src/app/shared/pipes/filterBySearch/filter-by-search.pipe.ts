import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search: string): any {
    console.log('pipe', search)
    if (!search) {
      return data
    }
    return data.filter(el => {
      return el.title.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    });
  }

}
