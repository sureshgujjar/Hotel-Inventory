import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  isLoggedIn:boolean=false;
  isAdmin:boolean=false;
  constructor() {}
  login(email:string,password:string)
  {
      if(email==="suri@gmail.com"&&password==="admin")
      {
       this.isLoggedIn=true;
       this.isAdmin=true;
      }
      if( email==="user@gmail.com"&&password==="user")
      {
       this.isLoggedIn=true;
       this.isAdmin=false;
      }
      return this.isLoggedIn;//we using provided in root so isLoggedIn value same for all components or class becoz root means singleTon instance.
      
  }
}
