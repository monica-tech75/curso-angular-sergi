import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
})
export class FirstPipePipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value?.toUpperCase() || '';
  }
}
