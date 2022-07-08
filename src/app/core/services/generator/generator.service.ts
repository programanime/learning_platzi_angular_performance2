import { Injectable } from '@angular/core';
import { interval } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  constructor() { }
  
  getData(){
      return interval(2000);
  }
}
