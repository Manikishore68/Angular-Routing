import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProductComponent} from './product/product.component';
import {SamsungComponent} from './samsung/samsung.component';
import {AppleComponent} from './apple/apple.component';
import {GoogleComponent} from './google/google.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path : 'home', component :HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'product', component : ProductComponent,
    children : [
      {path : 'samsung', component : SamsungComponent},
      {path : 'apple', component : AppleComponent},
      {path : 'google' , component : GoogleComponent}
    ]},
  {path : '**' , component : PagenotfoundComponent},
  {path : 'samsung', component : SamsungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
