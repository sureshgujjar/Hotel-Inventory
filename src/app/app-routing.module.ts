import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  {path:'rooms',component:RoomsComponent},//it will route at RoomsComponent when path /rooms is called.
  {path:'employee',component:EmpoyeeComponent},
  {path:'rooms/:roomid',component:RoomsBookingComponent},
  {path:'',redirectTo:'/rooms',pathMatch:'full'}, 
  {path:'**',component:NotFoundComponent},//if dont find any matching url
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
