import { Component, InjectionToken, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproducts } from '../../consts/product';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  private _pservice = inject(ProductService);
  productSt !: string;
  isdisabled : boolean = true;
  snabar !: any
  productArr : Array<Iproducts>  = this._pservice.productArr;
  constructor() { }

  ngOnInit(): void {
    
  }

  Onbtn(eve : string){
    console.log(eve);
    
    this.productArr.find(product => {
      product.productStatus = eve;
    })
  }

  onEdit(eve : HTMLInputElement){
    eve.disabled = !this.isdisabled
  }

  onDelete(eve : HTMLElement){
    console.log(eve);
    eve.remove();
  }
}
