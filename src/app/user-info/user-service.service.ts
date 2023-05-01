import { Injectable,Inject} from '@angular/core';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../AppConfig/appconfig.interface';
import {userDto} from '../user-info/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig,private http:HttpClient) {
    
   }
  //  userData=this.http.get("/list");
   getUserList()
   {
      return this.http.get<userDto[]>(this.config.apiEndpoint+"/list");

   }
   

}
