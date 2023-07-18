import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, SimpleChanges } from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {
  @Input() color: string | undefined;
  @Output() appEmit = new EventEmitter();
  @HostListener('click')
  onClick() {
    this.appEmit.emit();
  }

  constructor(private element: ElementRef, private render: Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['color']) {
      this.render.setStyle(this.element.nativeElement, 'color', this.color);
    }
  }
}
