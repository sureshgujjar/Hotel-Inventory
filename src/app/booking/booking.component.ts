import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'hop-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray; //get guests as FormArray using getter guests()
  }

  constructor(private fb:FormBuilder,private bookservice:BookingService) {
  
    
  }
  ngOnInit(): void {
    this.bookingForm=this.fb.group({
      bookingId:new FormControl('',{updateOn:'blur',validators:[Validators.required]}),//[''] and new FormControl('') are same.
      // roomId:new FormControl({value:5,disabled:true}),
      roomId:new FormControl('',[Validators.required]),
      guestEmail:['',[Validators.required,Validators.email]],
      checkinDate:[''],
      checkoutDate:[''],
      bookingStatus:[''],
      bookingAmount:[''], 
      bookingDate:[''],
      mobileNumber:['',{updateOn:'blur',validators:[Validators.required]}],//The blur event fires when an element has lost focus.so value of control update when it will lose focus. we can write this in template driven form also 
      guestName:['',[Validators.required,Validators.minLength(5)]],
      address:this.fb.group({
      addressLineOne:['',[Validators.required]],
      addressLineTwo:[''],
      city:[''],
      state:[''],
      country:[''],
      zipcode:[''],
    }
      ),
      guests:this.fb.array([this.fb.group({  //we create a array of guest using fb->FormBuilder and inside its we have a  group with two form fields guestName and age. 
        guestName:['',[Validators.required]],
        age:new FormControl(''),

      })]),
      tnc:new FormControl(false,[Validators.requiredTrue]),
    } ) 
    
    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data)=>{console.log(data)});//valueChanges Observable Observe any changes in form.
    // this.bookingForm.valueChanges.pipe(
    //   exhaustMap(data=>this.bookservice.bookRoom(data))
    // ).subscribe(data=>console.log(data))
  }

  addBooking(){
    // this.bookingForm.reset({
    //     bookingId:'',
    //     roomId:'',
    //     guestEmail:'',
    //     checkinDate:'',
    //     checkoutDate:'',
    //     bookingStatus:'',
    //     bookingAmount:'', 
    //     bookingDate:'',
    //     mobileNumber:'',
    //     guestName:'',
    //     address:{
    //     addressLineOne:'',
    //     addressLineTwo:'',
    //     city:'',
    //     state:'',
    //     country:'',
    //     zipcode:'',},
    //     guests:[{guestName:'',age:''}],
    //     tnc:''
    //   }
    //   );
    // console.log(this.bookingForm.getRawValue());// bookingForm.getRawValue() also fetch values of disable fields of form.
    // this.bookservice.bookRoom(this.bookingForm.getRawValue()).subscribe(data=>{console.log(data)})
   
  }

  addGuest()
  { 
    this.guests.push(this.fb.group(  //push new formGroup or fields into guests FormArray Dynamically on Add Buttons Click Event .
    {    
      guestName:['',[Validators.required]],
    age:new FormControl(''),
    }
      )                              
    )
  }
  addPassport()
  {
    this.bookingForm.addControl('passport',new FormControl(''));
  }
  removeGuest(index)
  {
    this.guests.removeAt(index);
  }
  deletePassport()
  {
    if(this.bookingForm.get('passport'))
    {
      this.bookingForm.removeControl('passport');
    }
  }
  getBookingData()
  {
    // this.bookingForm.setValue({
    //   bookingId:2,
    //   // roomId:new FormControl({value:5,disabled:true}),
    //   roomId:2,
    //   guestEmail:"suri@gmail.com",
    //   checkinDate:new Date('10-MAR-2023'),
    //   checkoutDate:new Date('15-MAR-2023'),
    //   bookingStatus:'',
    //   bookingAmount:'', 
    //   bookingDate:'',
    //   mobileNumber:'',
    //   guestName:'',
    //   address:{
    //   addressLineOne:'',
    //   addressLineTwo:'',
    //   city:'',
    //   state:'',
    //   country:'',
    //   zipcode:'',},
    //   guests:[{guestName:'suri',age:25}],
    //   tnc:false
    // }
    // );
    this.bookingForm.patchValue({
      bookingId:2,
      // roomId:new FormControl({value:5,disabled:true}),
      roomId:2,
      guestEmail:"suri@gmail.com",
      checkinDate:new Date('10-MAR-2023'),
      checkoutDate:new Date('15-MAR-2023'),
      bookingStatus:'',
      bookingAmount:'', 
      bookingDate:'',
      mobileNumber:'',
      guestName:'',
      address:{
      addressLineOne:'',
      addressLineTwo:'',
      city:'',
      state:'',
      country:'',
      zipcode:'',},
      guests:[],
      tnc:false
    }
    );
  }
}

