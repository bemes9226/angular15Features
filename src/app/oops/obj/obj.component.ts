import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obj',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.css']
})
export class ObjComponent {
  empid: number | undefined;
  empName: string | undefined;
  constructor() {

  }
  sayHello() {
    return 'Hello World';
  }
}

let obj = new ObjComponent();
obj.sayHello();
let a=obj.empName='qwe';
let b= obj.empid=12;
console.log('hello' + obj.sayHello()+a+b);
