import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hop-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm:FormGroup;


  constructor(private fb:FormBuilder) {
    
    
  }
  ngOnInit(): void {
    this.bookingForm=this.fb.group({
      bookingId:new FormControl(''),//[''] and new FormControl('') are same.
      roomId:new FormControl(''),
      guestEmail:[''],
      checkinDate:[''],
      checkoutDate:[''],
      bookingStatus:[''],
      bookingAmount:[''],
      bookingDate:[''],
      mobileNumber:[''],
      guestName:[''],
      guestAddress:[''],
      guestCity:[''],
      guestState:[''],
      guestCountry:[''],
      guestZipCode:[''],
      guestCount:[''],
      guestList:['']
    })
    
  }
  addBooking(){
    console.log(this.bookingForm.value);
  }
 
}

