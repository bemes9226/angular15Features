import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent {
//derive class will aquires the properties and methods from base class
}
class Animal{
  eat(){
    console.log("eat")
  }
  sleep(){
    console.log("sleep")
  }
}
class Dog extends Animal{
  // eat(){
  //   console.log("eat")
  // }
  // sleep(){
  //   console.log("sleep")
  // }
  bark(){
    console.log("eat");
  }
 
}
let dog=new Dog();
console.log(dog.eat())
class Cat extends Animal{
  // eat(){
  //   console.log("eat");
  // }
  // sleep(){
  //   console.log("sleep");
  // }
  Meaw(){
    console.log("Meaw");
  }
}
let cat=new Cat();
console.log("cat"+cat.sleep())