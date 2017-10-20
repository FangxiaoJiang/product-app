import { Component,Input,OnInit } from '@angular/core';
import {Product,Conditions} from '../product/product';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../product/product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  constructor(private route:ActivatedRoute,
              private productservice:ProductService,
              private location:Location){}
  ngOnInit():void{
    this.route.paramMap.switchMap((params:ParamMap)=>
          this.productservice.getProduct(+params.get('id')))
          .subscribe(product=>this.product=product);
  }
  goBack(): void {
    this.location.back();
  }
  //@Input()
    //(params:ParamMap)=>
    //this.productservice.getProducts(+params.get('id'))
}