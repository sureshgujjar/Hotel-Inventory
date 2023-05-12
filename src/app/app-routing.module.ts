import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},//pathMatch full means its matching full path from start. 
  {path:'**',component:NotFoundComponent},//if dont find any matching url
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
