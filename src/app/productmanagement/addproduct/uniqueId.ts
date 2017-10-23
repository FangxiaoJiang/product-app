import {AbstractControl, ValidationErrors,AsyncValidatorFn,NG_ASYNC_VALIDATORS,Validator} from '@angular/forms';
import { Directive,OnInit } from '@angular/core';
import {ProductService} from '../../product/product.service';
import {Product,Conditions} from '../../product/product';
import {Observable} from 'rxjs/Rx';

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
    validate(control: AbstractControl): Observable<{[key: string]:any}>{      
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].id===parseInt(control.value)){
                return Observable.of({uniqueId:true});
            }
        }

        return Observable.of(null);
    }
}