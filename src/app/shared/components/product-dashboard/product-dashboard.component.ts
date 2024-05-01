import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproducts } from '../../consts/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private _pservice : ProductService) { }
  productArr : Array<Iproducts> = this._pservice.productArr;
  ngOnInit(): void {
  }

}
