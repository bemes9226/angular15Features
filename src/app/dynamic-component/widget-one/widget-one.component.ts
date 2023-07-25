import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent {
  
@Input() name:string |undefined;

}
