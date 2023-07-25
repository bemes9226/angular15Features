import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent {
@Input() name:string |undefined;

}
