import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appLogoHighlight]'
})
export class LogoHighlightDirective {

  constructor(private element:ElementRef) {}
  @HostListener("click") onClicks(){
  this.textDeco("aqua")
  }

  @HostListener("dbclick") onDoubleClicks(){
    this.textDeco("transparent")
  }

  
  private textDeco(action:string){
    this.element.nativeElement.style.backgroundColour=action;
  }
}
