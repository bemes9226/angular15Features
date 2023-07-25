import { Component, Input } from '@angular/core';
import { CommonModule, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { CatModel } from '../types/imageItems';

@Component({
  selector: 'app-ng-image-optimize',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  providers:[{
    provide:IMAGE_LOADER,
    useValue:(config:ImageLoaderConfig)=>{
      return `https://cdn2.thecatapi.com/images/${config.src}`;
    }
  }],
  templateUrl: './ng-image-optimize.component.html',
  styleUrls: ['./ng-image-optimize.component.css']
})
export class NgImageOptimizeComponent {
  @Input() catItem!: CatModel;


}
