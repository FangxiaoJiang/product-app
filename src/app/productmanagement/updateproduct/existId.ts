import {AbstractControl, ValidationErrors,AsyncValidatorFn,NG_ASYNC_VALIDATORS,Validator} from '@angular/forms';
import { Directive,OnInit } from '@angular/core';
import {ProductService} from '../../product/product.service';
import {Product,Conditions} from '../../product/product';
import {Observable} from 'rxjs/Rx';

@Directive({
    selector: '[existId]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: existIdDirective, multi: true}]
  })

export class existIdDirective implements Validator,OnInit{
    products:Product[]
    constructor(private productservice:ProductService){};
    ngOnInit(){
        this.productservice.getProducts().subscribe(value => this.products=value);
    }
    validate(control: AbstractControl): Observable<{[key: string]:any}>{      
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].id===parseInt(control.value)){
                return Observable.of(null);
            }
        }

        return Observable.of({uniqueId:true});
    }
}