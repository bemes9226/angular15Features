import { Component } from '@angular/core';
import { FooDirective } from './foo.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorDirective } from './color.directive';
import { BoldDirective } from './bold.directive';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ObjComponent } from "./oops/obj/obj.component";
import { EncapsulationComponent } from "./oops/encapsulation/encapsulation.component";
import { InheritanceComponent } from "./oops/inheritance/inheritance.component";
import { CatModel } from './types/imageItems';
import { NgImageOptimizeComponent } from './ng-image-optimize/ng-image-optimize.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, FooDirective, RouterModule, ColorDirective, BoldDirective, ObjComponent, EncapsulationComponent, InheritanceComponent,NgImageOptimizeComponent]
})
export class AppComponent {
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
