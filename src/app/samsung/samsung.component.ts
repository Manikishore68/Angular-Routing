import { Component, OnInit } from '@angular/core';
import {Products} from '../models/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
    samsungs = [
      new Products(101,'Samsung M20s',14000,'Samsung'),
      new Products(102,'Samsung A70s',20000,'Samsung')
    ];

    public backToProducts(){
      this._router.navigate(['products']);
    }
}
