import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { RoomsComponent } from '../rooms.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hop-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{
   room:RoomsList=
   {
    roomNo:0,
    roomType:'',
    amenities:'',
    price:0,
    photos:'',
    checkinTime:new Date(),
    checkoutTime:new Date(),
    rating:0
   };
   hidden!:boolean
   successMsg!:string;
   todayDate=new Date().toUTCString();
  constructor(private roomService:RoomsService) {
    
    
  }
  ngOnInit(): void {
    
  }
  AddRoom(roomsForm:NgForm)
  {
    this.roomService.addRoom(this.room).subscribe((data)=>{
      this.successMsg="Room added successfully";
      roomsForm.resetForm();
      // roomsForm.resetForm();
      this.hidden=true;
    });
  }
}
