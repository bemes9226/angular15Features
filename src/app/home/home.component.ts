import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldDirective } from '../bold.directive';
import { ColorDirective } from '../color.directive';
import { FooDirective } from '../foo.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, FooDirective, ColorDirective, BoldDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular15Features';
  color = '';
  weight = '';
  showAlert() {
    alert("hello");
  }
}
