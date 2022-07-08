import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";

import { ShoesRoutingModule } from "./shoes-routing.module"


import { ShoesComponent } from "./shoes.component";
import { InfoComponent } from './info/info.component'

@NgModule({
    declarations: [
        ShoesComponent,
        InfoComponent
    ],
    imports:[
        ShoesRoutingModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class ShoesModule { }