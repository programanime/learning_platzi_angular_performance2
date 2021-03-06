import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { environment } from "./../environments/environment";
import {AuthInterceptor} from "./auth.interceptor";
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


import * as Sentry from "@sentry/angular";
import { ServiceWorkerModule } from '@angular/service-worker';
Sentry.init({
    dsn: "https://e9c002131fa84a1b89b9d1ba35926cfc@o1070901.ingest.sentry.io/6067344"
});

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    SharedModule,
    QuicklinkModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
