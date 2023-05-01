import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import{environment} from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  //  providedIn: 'root'= it means this service will register at app.module.ts,by this only single instance of this service
  //
  providedIn: 'root'  
})
export class RoomsService {
  roomsList:RoomsList[]= [{
    roomNo: 1,
    roomType: "Delux Room",
    amenities: "ac, wifi, tv, bathroom, kitchen",
    price: 500,
    photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    checkinTime: new Date('19 Apr 2023'),
    checkoutTime: new Date('20 Apr 2023'),
    rating: 8.5
  },
  {
    roomNo: 2,
    roomType: "Basic Room",
    amenities: "AC, BathRoom, Kitchen, TV",
    price: 400,
    photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    checkinTime: new Date('19 Mar 2023'),
    checkoutTime: new Date('20 Apr 2023'),
    rating: 7.6
  },
  {
    roomNo: 3,
    roomType: "Delux Room",
    amenities: "AC, TV, BathRoom",
    price: 350,
    photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    checkinTime: new Date('19 Mar 2023'),
    checkoutTime: new Date('20 Apr 2023'),
    rating: 8.8
  },
  {
    roomNo: 4,
    roomType: "Private Suite",
    amenities: "AC, WiFi, TV, BathRoom, Kitchen",
    price: 2000,
    photos: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    checkinTime: new Date('19 Mar 2023'),
    checkoutTime: new Date('20 Apr 2023'),
    rating: 9.9
  }];
constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig,private http:HttpClient) {
  
      console.log(this.config.apiEndpoint); 
  console.log("Roomsservice Initilized...");
}
getRooms()
{
     return this.roomsList;
}
}
