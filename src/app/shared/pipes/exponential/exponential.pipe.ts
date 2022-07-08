import { Pipe, PipeTransform } 
from '@angular/core';

@Pipe({name: 'exponential', pure:true})
export class ExponentialPipe 
implements PipeTransform {
  transform(value: number): number {
    return Math.pow(value, 2);
  }
}
