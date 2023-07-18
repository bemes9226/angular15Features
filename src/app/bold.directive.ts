import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class BoldDirective implements OnChanges {
  @Input() weight: string | undefined;
  constructor(private element: ElementRef, private render: Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weight']) {
      this.render.setStyle(this.element.nativeElement, 'font-weight', this.weight);
    }
  }

}
