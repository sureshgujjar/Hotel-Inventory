import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'hop-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush//ensure change detaction happen only if any change will be done on component by immutable way . 
})
export class RoomsListComponent implements OnInit,OnChanges{
  @Input() rooms: RoomsList[] = [];//its make rooms property for our custom component html tag(<hop-rooms-list></hop-rooms-list>) to take input from Parent .
  @Input() title:string="";
  @Output() selectedRoom = new EventEmitter<RoomsList>();//we create an event selectedRoom type of<RoomsList>  using EvenntEmitter Class to send output to Parent.
  constructor() {

  }
  //ngOnchanges-SimpleChanges is an Angular/Core feature that can be used to see the changes and a few more details of the declared (@input)property names in a component .
 ngOnChanges(changes: SimpleChanges): void { 
    console.log(changes);
    if(changes['title'])
    {
        this.title=changes['title'].currentValue.toUpperCase();  //ngOnchanges hook use whenever we want to control what value need to be updated on new data passing.
    }
  }
  ngOnInit(): void {

  }
  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);  //room obejct will send using selectedRoom event by emit it. 
  }

}
