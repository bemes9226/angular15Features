import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProductComponent } from './app/product/product.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes=[{path:'home', 
              component:HomeComponent,
              title:'Home page'},
              {path:'product',
               loadComponent:()=>import('./app/product/product.component').then(res=>res.ProductComponent),
              title:'product page'}]
bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(RouterModule.forRoot(routes)), provideAnimations()]
}).catch(e=>console.log('e'));