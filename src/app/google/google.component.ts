import { Component, OnInit } from '@angular/core';
import {Products} from '../models/products';
import {Router} from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  googles = [
    new Products(101,'pixel 8',54000,'Google'),
    new Products(102,'pixels 4',40000,'Google')
  ];

  public backToProducts(){
    this._router.navigate(['products'])
  }
}
