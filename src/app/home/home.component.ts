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
import { NgImageOptimizeComponent } from "../ng-image-optimize/ng-image-optimize.component";
import { CatModel } from '../types/imageItems';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, FooDirective, ColorDirective, BoldDirective, NgImageOptimizeComponent]
})
export class HomeComponent {
  title = 'angular15Features';
  color = '';
  weight = '';
  cats: CatModel[] = [
    {
      id: 'nrPdW40A4',
      url: 'nrPdW40A4.jpg',
      width: 600,
      height: 450,
    },
    {
      id: 'nowPuzVLA',
      url: 'nowPuzVLA.jpg',
      width: 225,
      height: 225,
    },
    {
      id: '-sN9TIb05',
      url: '-sN9TIb05.jpg',
      width: 3724,
      height: 2096,
    },
    {
      id: '4rkjKCYl4',
      url: '4rkjKCYl4.jpg',
      width: 817,
      height: 613,
    },
    {
      id: 'F1jxAFqG-',
      url: 'F1jxAFqG-.jpg',
      width: 576,
      height: 385,
    },
    {
      id: 'zbEbBhxbU',
      url: 'zbEbBhxbU.jpg',
      width: 1200,
      height: 1387,
    },
    {
      id: 'wLo95XreJ',
      url: 'wLo95XreJ.jpg',
      width: 650,
      height: 454,
    }
  ];
  showAlert() {
    alert("hello");
  }
}
