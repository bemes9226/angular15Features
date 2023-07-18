import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { ColorDirective } from './color.directive';

@Directive({
  selector: '[appFoo]',
  standalone: true,
  hostDirectives: [{ directive: BoldDirective, inputs: ['weight'] },
  { directive: ColorDirective, inputs: ['color'], outputs: ['appEmit'] }]
})
export class FooDirective {


  constructor() {

  }

}
