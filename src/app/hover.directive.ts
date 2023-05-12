import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hopHover]'
})
export class HoverDirective implements OnInit{  
   
//  @Input() color:string='rgb(240, 235, 250)';
@Input() hopHover!:string;
 
 constructor(private element:ElementRef,private renderer:Renderer2) {
        
   }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor=this.color;
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.hopHover);
  }
 @HostListener('mouseenter') onMouseEnter() //hophover directive listen for mouseenter event.
 {
  this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#e0d5f2');
}
@HostListener('mouseleave') onMouseLeave()
{
 this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.hopHover);
}
//   @HostListener('mouseenter') onMouseEnter()
//  {
//   this.renderer.setStyle(this.element.nativeElement,'opacity','75%');
// }
// @HostListener('mouseleave') onMouseLeave()
// {
//  this.renderer.setStyle(this.element.nativeElement,'opacity','100%');
// }

}
