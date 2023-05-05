import { Inject } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(@Optional()private loggerService:LoggerService,
  @Inject(localStorageToken)private localStorage:Storage,private initService:InitService){
       
     console.log(initService.config);//access config property of initService which is inject by config.json before app. initilize.
    
  }
  ngAfterViewInit(): void { 
          
    // const componentRef=this.vcr.createComponent(RoomsComponent);//creating RoomsComponent Dynamically.
    // componentRef.instance.numberOfRooms=50;//changeing value of insatnce numberOfRooms of RoomsComponent.
  }
  
  title = 'HotelInventory';
  role="Admin";
  // @ViewChild('user',{read:ViewContainerRef})vcr!:ViewContainerRef;// creating template refrence for our ng-template.
  @ViewChild('name',{static:true})name!:ElementRef; //acessing div html element tag which have name refrence 
  ngOnInit():void
  {
    this.localStorage.setItem('name','Hotel Milton');
    this.loggerService?.log("In AppComponent ngOnInit");
    this.name.nativeElement.innerText="Hotel Milton";
  }

}
