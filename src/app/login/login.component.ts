import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'hop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   email:string="";
   password:string="";
   
   constructor(private route:Router) {
    
    
   }
   login()
   {
       if(this.email==="suri@gmail.com"&&this.password==="admin")
       {
         //  alert("Login Successfully");
         this.route.navigate(['/rooms','add']);//it will navigate to /rooms/add.
         // this.route.navigateByUrl('/rooms/add');
       }
   }
}
