import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';

import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { shareReplay } from 'rxjs';
@Injectable({
  //  providedIn: 'root'= it means this service will register at app.module.ts,by this only single instance of this service
  //
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {

    console.log(this.config.apiEndpoint);
    console.log("Roomsservice Initilized...");
  }
  //getRooms$ means getRooms stream
  // header=new HttpHeaders({'token':'hahsjah5252as111223'});//setting token data as HttpHeader and send to serverSide method-1.
    //  header=new HttpHeaders().set('user','suri');//setting user value as HttpHeader And send to serverSide method-2
  getRooms$ = this.http.get<RoomsList[]>(this.config.apiEndpoint + "/rooms").pipe(//we can change stream of data using pipe before Subscribe.
    // shareReplay(1)//most used case we know about ShareReplay is when doing HTTP calls, we can call API once, and use ShareReplay(1) to give the results to other subscribers also.
  );
  getRooms() {

    return this.http.get<RoomsList[]>(this.config.apiEndpoint + "/rooms");
  }
  addRoom(room: RoomsList) {
    // const roomJson=JSON.stringify(room);
    // console.log(roomJson);
    return this.http.post(this.config.apiEndpoint + "/room", room);
  }
  editRoom(roomId: number, room: RoomsList) {
    return this.http.put(this.config.apiEndpoint + `/room/${roomId}`, room);
  }
  deleteRoom(roomId: number) {
    return this.http.delete(this.config.apiEndpoint + `/room/${roomId}`)
  }
  getPhotos() {
    /* 
    HttpRequest represents an outgoing request, including URL, method, headers, body, 
    and other request configuration options.
    it will also give information about large data that how much data will be loaded till now.
    it will use with api which give us lot of data.
    it will return reponse in steps or event.
    */
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    })
    return this.http.request(request);
  }
}
