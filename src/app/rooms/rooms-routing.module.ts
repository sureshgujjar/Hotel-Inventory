import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoyeeComponent } from '../empoyee/empoyee.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [  {path:'rooms',component:RoomsComponent},//it will route at RoomsComponent when path /rooms is called.
{path:'employee',component:EmpoyeeComponent},
{path:'rooms/add',component:RoomsAddComponent},
{path:'rooms/:roomid',component:RoomsBookingComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
