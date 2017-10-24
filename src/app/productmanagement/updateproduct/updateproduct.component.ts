import { Component } from '@angular/core';
import {ProductService} from '../../product/product.service';
import {Product,Conditions} from '../../product/product';
import {Router} from '@angular/router';

@Component({
    selector: 'product-form',
    templateUrl: './updateproduct.component.html',
    providers:[ProductService],
    styles:[`div{
        width:250px
    }`]
    })
export class UpdateProductComponent {
    constructor(private productservice:ProductService, private router:Router){};
        
    submit(form){
        if(form.value.product_id){
            this.productservice.updateProduct(new Product(
                form.value.product_id,
                form.value.product_name,
                form.value.product_description,
                +form.value.product_price ,
                form.value.product_condition,
                form.value.product_category
            ))
        };
        this.router.navigate(["show"]);
    }
}