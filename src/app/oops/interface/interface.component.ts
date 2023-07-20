import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  //interfaces acts like a contract in ur application
//type of ur classes
}
interface IEmployee{
  Role():void;
}
class PermanantEmpoyee implements IEmployee{
  Role(){}
}
class ContractEmpoyee implements IEmployee{
  Role(){}
}