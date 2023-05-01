import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, Query, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hop-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName: string = "Taj Hotel";
  numberOfRooms: number = 10;
  hideRooms = false;
  selectedRoom!: RoomsList;
  rooms: Room = {
    totelRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title: string = "Room List";
  roomsList: RoomsList[] = [];
  // @ViewChild(HeaderComponent,{static:true}) headerComponent!: HeaderComponent;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild returns a single native DOM element as a reference, 
  //while the @ViewChildren decorator returns the list of different native DOM elements in the form of QueryList, 
  //which contains the set of elements.

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>;

  //Consturctor Should Only Use For Intilization and Not for logical code.
  //Consturctor will called on time of reddering of component on view(.html).
  //After Consturctor ngOnInit() hook will be called.
  
  
  constructor(@SkipSelf() private roomService:RoomsService) {
   this.roomsList=roomService.getRooms();
  }

  //ngOnInit should only use for logical code. 

  ngOnInit(): void {
    // console.log(this.headerComponent); //if static:true then @ViewChild() headerComponent avaiable otherwise not. 

    

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
    this.headerChildren.forEach(elemt=>elemt.title="Yo Its Header");
   
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
    this.roomsList = [...this.roomsList, room]// our roomList array should be immutable so we add new room object in array using spread(...) opretor.

  }
  
}
