import { Component,OnInit } from '@angular/core';
import {Product,Conditions} from '../../product/product';
import {ProductService} from '../../product/product.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
   selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ShowProductComponent implements OnInit {

  constructor(private productservice: ProductService,private router:Router) {}
  selectedProduct:Product;
  products:Product[];
  observable:Observable<Product[]>;
  ngOnInit():void{
    this.productservice.getProducts().subscribe(value => this.products=value);
  }
  back(){
    this.router.navigate(['']);
  }
}