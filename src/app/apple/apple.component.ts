import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../models/products';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private  _router : Router) { }

  ngOnInit(): void {
  }
    apples = [
      new Products(101,'iphone8',60000,'Apple'),
      new Products(102,'iPhone 10', 98000,'Apple')
  ];

  public backToProducts(){
    this._router.navigate(['products']);
  }

}
