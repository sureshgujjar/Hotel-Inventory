import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hopEmailvaildator]',
  providers: [{provide: NG_VALIDATORS, //adding EmailvaildatorDirective to angulars NG_VALIDATORS Injection Token
    useExisting: EmailvaildatorDirective, 
    multi: true
  }]
})
export class EmailvaildatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {//ValidationErrors in key value pair {"key":value}
    const value=control.value as string; // typecast control.value as string and store in value
   if(value.includes("test"))
   {
        return {invalidEmail:true}
   }
   else
   {
    return null;
   }
    
  
   
}
}
