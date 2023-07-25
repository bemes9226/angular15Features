import { Component, ViewChild, ViewContainerRef } from '@angular/core';
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
import { WidgetOneComponent } from './dynamic-component/widget-one/widget-one.component';
import { WidgetTwoComponent } from './dynamic-component/widget-two/widget-two.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, 
      MatToolbarModule, FooDirective, RouterModule, ColorDirective, 
      BoldDirective, ObjComponent, EncapsulationComponent, 
      InheritanceComponent,NgImageOptimizeComponent,WidgetOneComponent,WidgetTwoComponent]
})
export class AppComponent {
  title = 'angular15Features';
  color = '';
  weight = '';
  
  
  showAlert() {
    alert("hello");
  }
}
