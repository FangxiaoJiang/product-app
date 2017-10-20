import { Component,OnInit } from '@angular/core';
import {Product,Conditions} from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';
import {cartItem} from '../cart/cart-item';
import {Router} from '@angular/router';

@Component({
   selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  constructor(private productservice: ProductService,private router:Router) {}
  selectedProduct:Product;
  products:Product[];
  observable:Observable<Product[]>;
  ngOnInit():void{
    //this.productservice.getProducts().then(products=>this.products=products);
    this.productservice.getProducts().subscribe(value => this.products=value);
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.Id]);
  }
}