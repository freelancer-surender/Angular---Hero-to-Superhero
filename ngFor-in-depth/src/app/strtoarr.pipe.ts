import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtoarr'
})
export class StrtoarrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    return value.split("");
  }

}
