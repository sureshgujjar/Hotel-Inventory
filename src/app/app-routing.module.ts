import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './gards/login.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  //becoz we define rooms path here so we dont have to define in rooms-routing.module of RoomsModule.
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule),
    // canActivate: [LoginGuard],
    // canLoad: [LoginGuard]
  },// import will download RoomsModule at run time if needed  and provide lazy loading functionality
  { path: '', redirectTo: '/login', pathMatch: 'full' },//pathMatch full means its matching full path from start.
  {
    path: 'employee', component: EmpoyeeComponent,
    // canActivate: [LoginGuard] 
  },

  {
    path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate:[LoginGuard]  
  },
  { path: '**', component: NotFoundComponent },//if dont find any matching url




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
