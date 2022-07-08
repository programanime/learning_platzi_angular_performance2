import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {GeneratorService} from "../core/services/generator/generator.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoesComponent implements OnInit, OnDestroy {
    data = {
        name:"daniel"
    }
    
    numero : number = 0;
    sub$: Subscription;
    
    constructor(private generatorService:GeneratorService) { }
    
    ngOnInit(): void {
        this.sub$ = this.generatorService.getData().subscribe(value => {
            this.numero++;
            console.log("llego aqui ppero")
        })
    }
    
    ngOnDestroy(){
        this.sub$.unsubscribe();
    }
}
