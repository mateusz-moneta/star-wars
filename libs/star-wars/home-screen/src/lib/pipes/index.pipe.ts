import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {
  private readonly PAGE_COUNT = 10;

  transform(value: number, pageIndex: number): number {
    switch (pageIndex) {
      case 1:
        return value + 1;

      case 2:
        return (pageIndex - 1) * this.PAGE_COUNT + (value + 1);

      default:
        return (pageIndex - 1) * this.PAGE_COUNT + (value + 2);
    }
  }
}
