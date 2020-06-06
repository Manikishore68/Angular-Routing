import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _router : Router,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
  }

    public showSamsung(){
      this._router.navigate(['samsung'], {relativeTo: this._route});
    }
    public  showApple(){
      this._router.navigate(['apple'],{relativeTo : this._route});
    }
    public showGoogle(){
      this._router.navigate(['google'],{relativeTo : this._route});
    }
}
