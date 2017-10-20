import { Component,OnInit } from '@angular/core';
import {Product} from '../product/product';
import {ProductService} from '../product/product.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector:'my-dashboard',
    templateUrl:`./dashboard.component.html`,
    styleUrls: [ './dashboard.component.css' ]
    
    
})
export class DashboardComponent implements OnInit{
    products:Product[]=[];
    constructor(private productservice:ProductService){};
    ngOnInit():void{
        this.productservice.getProducts().subscribe(value => this.products=value.slice(0,4));
    }
}