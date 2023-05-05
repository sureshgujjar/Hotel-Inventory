import { AfterContentInit, Component, ContentChild, Host, ViewChild } from '@angular/core';
import { EmpoyeeComponent } from '../empoyee/empoyee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hop-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers:[RoomsService]
})
export class ContainerComponent implements AfterContentInit
{
  @ContentChild(EmpoyeeComponent)employeeComponent!: EmpoyeeComponent;
  // constructor(//@Host()private roomservice:RoomsService) { //this @Host() means this (container)component provide service for other components which are used inside in this component tag.
  /*
  ngAfterContentInit = A lifecycle hook that is called after Angular has fully initialized all content of a directive.
  Define an ngAfterContentInit() method to handle any additional initialization tasks. 
   */
    

  /**
   *
   */
  constructor() {
    
    
  }
  
  ngAfterContentInit(): void {

    this.employeeComponent.employeeName="John Wick";
    console.log(this.employeeComponent.employeeName);
 }
   
}
