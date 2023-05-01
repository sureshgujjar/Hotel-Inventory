import { Component, OnInit } from '@angular/core';
import { userDto } from './userDto';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'hop-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
   userDto:userDto[]=[];
   /**
    *
    */
   constructor(private userService:UserServiceService) {
  
    
   }
  ngOnInit(): void {
    this.userService.getUserList().subscribe(users=>{
      this.userDto=users;

    });
   
  }
 
}
