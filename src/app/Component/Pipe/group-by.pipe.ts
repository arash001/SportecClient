import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})

export class GroupByPipe implements PipeTransform {
  transform(collection: any[], property: string): any[] {
    const groupedCollection = collection.reduce((accumulator, item) => {
      const key = String(item[property])//.toDateString(); // Group by the date part only
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(item);
      return accumulator;
    }, {});

    return Object.entries(groupedCollection).map(([key, value]) => ({
      key,
      items: value
    }));
  }
}

