import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText',
  standalone: false
})
export class ReverseTextTsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
