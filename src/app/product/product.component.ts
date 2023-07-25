import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
//dynamic component
@ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined;
componentConfig=[{
   component: import('../dynamic-component/widget-one/widget-one.component').then(it=>it.WidgetOneComponent),
   inputs:{
    name:'bhemesh reddy'
   }
},{
component: import('../dynamic-component/widget-two/widget-two.component').then(it=>it.WidgetTwoComponent),
inputs:{
  name:'sallepalle'
} 
} 
]
add(){
  this.componentConfig.forEach(async components=>{
    const instance=await components.component;
    let compoRef:any=this.container?.createComponent(instance);
    Object.entries(components.inputs).forEach(([key,value])=>{
      compoRef.setInput(key,value);
    })
  })
}
}
