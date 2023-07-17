import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true
})
export class FooDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color='red';
  }

}
