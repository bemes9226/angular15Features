import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProductComponent } from './app/product/product.component';

const routes=[{path:'home', 
              component:HomeComponent},
              {path:'product',
               loadComponent:()=>import('./app/product/product.component').then(res=>res.ProductComponent)}]
bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(RouterModule.forRoot(routes))]
}).catch(e=>console.log('e'));