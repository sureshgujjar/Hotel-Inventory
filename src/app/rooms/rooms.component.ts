import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Query, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'hop-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,  AfterViewInit, AfterViewChecked,OnDestroy{
  hotelName: string = "Taj Hotel";
  numberOfRooms: number = 10;
  hideRooms = true;
  selectedRoom!: RoomsList;
  rooms: Room = {
    totelRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title: string = "Room List";
  roomsList: RoomsList[]= [];
  stream = new Observable(observer => {
    observer.next("User1");// when we call next() with observer it will emit a new Data.who ever subscribe to stream get
    observer.next("User2");//this data.
    observer.next("User3");
    observer.complete();
  })
  subscription!:Subscription;
  // @ViewChild(HeaderComponent,{static:true}) headerComponent!: HeaderComponent;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild returns a single native DOM element as a reference, 
  //while the @ViewChildren decorator returns the list of different native DOM elements in the form of QueryList, 
  //which contains the set of elements.

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  //Consturctor Should Only Use For Intilization and Not for logical code.
  //Consturctor will called on time of reddering of component on view(.html).
  //After Consturctor ngOnInit() hook will be called.


  constructor(@SkipSelf() private roomService: RoomsService,private config:ConfigService) {

  }
 
  
  totelBytes = 0;

  //ngOnInit should only use for logical code. 
  room$=this.roomService.getRooms$.subscribe();
  roomcount$=this.roomService.getRooms$.pipe(
    map((rooms)=>rooms.length)// modify data using map opretor of RxJS.
  )
  ngOnInit(): void {
    // console.log(this.headerComponent); //if static:true then @ViewChild() headerComponent avaiable otherwise not. 
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("complete"),
      error: (err) => console.log(err)

    }
    )
    //  this.roomService.getRooms().subscribe
    this.subscription=this.roomService.getRooms$.subscribe(rooms => { //use getRooms$ stream to call same api at multipal component it will only send  HttpRequest once
      this.roomsList = rooms;});
    // 
 
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request Is Send ");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request Succcess");
          break;
        }
        case HttpEventType.DownloadProgress:
          {
            this.totelBytes += event.loaded;//HttpEvent type event send how much data is loaded.
            break;
          }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }


      }
    })
  }






  //A lifecycle hook that is called after the default change detector has completed checking a component's view for changes.

  ngAfterViewChecked(): void {

  }
  //A lifecycle hook that is called after Angular has fully initialized a component's view.
  //Define an ngAfterViewInit() method to handle any additional initialization tasks.

  ngAfterViewInit(): void {

    this.headerComponent.title = "RoomsView"// we change property(title) of headerComponent 
    // this.headerChildren.last.title="RoomsViewAtThird"
    // this.headerChildren.get(1)!.title="Its a Title at index one";
    this.headerChildren.forEach(elemt => elemt.title = "Yo Its Header");

  }
  /* 
  ngDoCheck= its excuted every time we raise any changes in our whole appliction. 
             we rarily used it. 
             dont use ngChanges and ngDoCheck at same time.
  */

  ngDoCheck(): void {
    console.log('on do check is called')
  }




  getRoomsInfo() {
    this.hideRooms = !this.hideRooms; //change value of hiderooms to its !oppsit.
    this.title = "Rooms List"
  
  }
  selectRoom(room: RoomsList) {
    this.selectedRoom = room;

  }
  addRoom() {
    const room: RoomsList =
    {
      roomNo: 5,
      roomType: "Delux Room",
      price: 500,
      amenities: "AC, Wifi,Tv",
      photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      checkinTime: new Date("20-APR-2023"),
      checkoutTime: new Date("26-APR-2023"),
      rating: 7.5
    }
    // this.roomsList.push(room);//its not immutable way to push room info into roomList we use below method.
    // this.roomsList = [...this.roomsList, room]// our roomList array should be immutable so we add new room object in array using spread(...) opretor.
    this.roomService.addRoom(room).subscribe(()=>{
      this.roomService.getRooms$.subscribe(data=>this.roomsList=data);
    }
      
    );
   
    
  }

  editRoom() {
    const room: RoomsList =
    {
      roomNo: 5,
      roomType: "Super Delux Room",
      price: 1800,
      amenities: "AC, Wifi,Tv",
      photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      checkinTime: new Date("20-APR-2023"),
      checkoutTime: new Date("26-APR-2023"),
      rating: 7.5
    }
    this.roomService.editRoom(room.roomNo, room).subscribe();
  }
  deleteRoom() {
    this.roomService.deleteRoom(5).subscribe();
  }
  ngOnDestroy(): void {
   if(this.subscription)
   {
     this.subscription.unsubscribe();  //here we unsub. roomsService room api call.
   }
  }
  
}
