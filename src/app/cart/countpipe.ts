import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../product/product';

@Pipe({
    name:'totalfee'
})
export class calculateTotalFeePipe implements PipeTransform{
    transform(product:Product,num:number){
        if(!Product || !num)
            return null;
        return product.price*num;
    }
}