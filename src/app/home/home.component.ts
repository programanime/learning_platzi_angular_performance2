import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import Swiper from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper:Swiper;
  constructor(@Inject(PLATFORM_ID) private platformId:Object) { 
      
  }

  ngOnInit(): void {
      
  }
  
  ngAfterViewInit(){
      if(isPlatformBrowser(this.platformId)){
        this.mySwiper=new Swiper(".swiper-container");
      }
  }
}
