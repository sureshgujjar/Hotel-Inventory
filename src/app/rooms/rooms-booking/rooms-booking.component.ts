import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hop-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {
  id!:number;
  id$=this.router.paramMap.pipe(map(params=>params.get('roomid')));
 
  constructor(private router:ActivatedRoute) 
  {
    
  }

  ngOnInit():void
  {
     // this.id$=this.router.params.pipe(
  //   map(params=>params['roomid'])
  // )
    // this.id=this.router.snapshot.params['roomid'];//snapshot never update the data in same view  . it uses value taken from another component. 
  //  this.router.params.subscribe((params)=>{this.id=params["roomid"]});//subscribe lead to memory leakage.
  }

} 
