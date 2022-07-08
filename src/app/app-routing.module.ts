import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"
import {LayoutComponent} from "./layout/layout.component"
import {AdminGuard} from "./admin.guard"
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { PreloadService } from "./core/services/preload/preload.service";
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"",
                redirectTo: "/home",
                pathMatch: "full"
            },
            {
                path: 'home',
                loadChildren: ()=> import("./home/home.module").then(m => m.HomeModule),
                data:{preload:true}
            },
            {
                path: 'contact',
                canActivate: [AdminGuard],
                component:ContactComponent
            },
            {
                path: 'products',
                loadChildren: ()=> import("./product/product.module").then(m => m.ProductModule),
                data:{preload:true}
            },
            {
                path: 'shoes',
                loadChildren: ()=> import("./shoes/shoes.module").then(m => m.ShoesModule)
            },
            {
                path: 'order',
                loadChildren: ()=> import("./order/order.module").then(m => m.OrderModule)
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //   preloadingStrategy:PreloadAllModules
    //   preloadingStrategy:PreloadService
      preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
