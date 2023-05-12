import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContainerComponent } from './container/container.component';
import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';

import { RoomsModule } from './rooms/rooms.module';
import { EmailvaildatorDirective } from './vaildator/emailvaildator.directive';



//this funcation call InitService
function initFactory(initService:InitService)
{
   return ()=>initService.init();//calling init() mthod of initService.
}

@NgModule({
  declarations: [
    AppComponent,
   
    ContainerComponent,
    EmpoyeeComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvaildatorDirective
    
  ],
  imports: [
    BrowserModule,
    RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,

  ],
  providers: [{
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG
  },  
  {
    //registoring RequestInterceptor class as HTTP_INTERCEPTORS
    provide:HTTP_INTERCEPTORS,//
    useClass:RequestInterceptor,
    multi:true,
  },
  {//registoring InitService as APP_INITIALIZER
    provide:APP_INITIALIZER,
    useFactory:initFactory,//factory method for calling InitService class Method
    deps:[InitService],
    multi:true,//multi:true means this service serve multipal object.

  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
