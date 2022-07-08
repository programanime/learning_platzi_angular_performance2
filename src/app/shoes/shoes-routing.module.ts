import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from "./shoes.component";


const routes: Routes = [
    {
        path: '',
        component:ShoesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesRoutingModule { }
