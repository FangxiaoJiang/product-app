import { Component } from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product,Conditions} from '../product/product';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html',
    providers:[ProductService],
    styles:[`div{
        width:250px
    }`]
    })
    export class ProductFormComponent {
        constructor(private productservice:ProductService){};
        
        
        submit(form){
            if(form.value.product_id){
                this.productservice.addProduct(new Product(
                    form.value.product_id,
                    form.value.product_name,
                    form.value.product_description,
                    parseInt(form.value.product_price) ,
                    form.value.product_condition,
                    form.value.product_category
                ))
            };
        }
}