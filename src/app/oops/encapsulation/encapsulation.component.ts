import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encapsulation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css']
})
export class EncapsulationComponent {
// encap is data and function together 
//to restrict direct access
  private empId:number | undefined;
  empName:string | undefined;

  setEmpId(empId:number){
    return this.empId=empId;
  }
  getEmpId(){
    return this.empId;
  }
}
let obj=new EncapsulationComponent();
obj.setEmpId(10);
console.log('id',obj.getEmpId())