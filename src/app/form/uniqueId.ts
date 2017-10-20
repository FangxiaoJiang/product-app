import {AbstractControl, ValidationErrors,AsyncValidatorFn,NG_ASYNC_VALIDATORS,Validator} from '@angular/forms';
import { Directive,OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'; 
import {ProductService} from '../product/product.service';
import {Product,Conditions} from '../product/product';

@Directive({
    selector: '[uniqueId]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: uniqueIdDirective, multi: true}]
  })

export class uniqueIdDirective implements Validator,OnInit{
    products:Product[]
    constructor(private productservice:ProductService){};
    ngOnInit(){
        this.productservice.getProducts().subscribe(value => this.products=value);
    }
    validate(control: AbstractControl): Promise<{[key: string]:any}>{      
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].Id===parseInt(control.value)){
                return Promise.resolve({uniqueId:true});
            }
        }

        return Promise.resolve(null);
    }
}