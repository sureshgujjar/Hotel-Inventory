import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoyeeComponent } from '../empoyee/empoyee.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomGuard } from './gard/room.guard';
//it will route at RoomsComponent when path /rooms is called.
// const routes: Routes = [  {path:'rooms/add',component:RoomsAddComponent},
// //alaways put dynamic routing like :roomid placeHolder after other child route like rooms/add is should be before 
// {path:'rooms',component:RoomsComponent,children:[{path:':roomid',component:RoomsBookingComponent}]},//children: allow nasted routing.
// {path:'employee',component:EmpoyeeComponent,},

// ];
const routes: Routes = [  
//alaways put dynamic routing like :roomid placeHolder after other child route like rooms/add is should be before 
{path:'',component:RoomsComponent,canActivateChild:[RoomGuard],children:[{path:'add',component:RoomsAddComponent},{path:':roomid',component:RoomsBookingComponent}]},//children: allow nasted routing.
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
