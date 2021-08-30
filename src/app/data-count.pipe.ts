import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataCount'
})
export class DataCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
