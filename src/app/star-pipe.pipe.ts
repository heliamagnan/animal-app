import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starPipe'
})
export class StarPipePipe implements PipeTransform {

  transform(value: string): string {
    let result = '★ ' + value;
    return result;
  }

}
