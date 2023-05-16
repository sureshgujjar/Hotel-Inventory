import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'hop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   email:string="";
   password:string="";
   
   constructor(private route:Router,private loginService:LoginserviceService) {
    
    
   }
   login(){
        if(this.loginService.login(this.email,this.password))
        {
          this.route.navigate(['/rooms']); 
        }
   }
  //  login()
  //  {
  //      if(this.email==="suri@gmail.com"&&this.password==="admin")
  //      {
  //        //  alert("Login Successfully");
  //        this.route.navigate(['/rooms','add']);//it will navigate to /rooms/add.
  //        // this.route.navigateByUrl('/rooms/add');
  //      }
  //  }
}
