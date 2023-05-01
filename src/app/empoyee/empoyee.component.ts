import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hop-empoyee',
  templateUrl: './empoyee.component.html',
  styleUrls: ['./empoyee.component.scss'],
  providers: [RoomsService] //it will create Seprate Instance of RoomsService for this component(Employee)
})
export class EmpoyeeComponent {
  employeeName:String="John Cena";
  /**
   *
   */
  constructor(@Self() private roomSerice:RoomsService) { // @Self it will throw error if RoomsService is not Provide in this Component
    
    
  }
  

}
