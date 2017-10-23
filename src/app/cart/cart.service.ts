import {Injectable} from "@angular/core";
import {cartItem} from "./cart-item";
import {Product} from "../product/product";

export class CartService{
    private Items:cartItem[]=[];
    private total=0;
    private isshow=false;

    add_product(selectedProduct:Product){
        if (selectedProduct){
          this.total++;  
          for(let i=0;i<this.Items.length;i++){
            if(this.Items[i].product.id===selectedProduct.id){
              this.Items[i].quantity++;
              return;
            }
          }
          this.Items.push(new cartItem(selectedProduct,1));
        }
        else
          alert("You should choose a product first!");
    }

    changeState(){
        this.isshow=!this.isshow;
    }

    getAllFees(){
        let total:number=0;
        for(let i=0;i<this.Items.length;i++)
            total+=this.Items[i].product.price*this.Items[i].quantity;
        return total;
    }

    getTotal():number{
        return this.total;
    }

    getItems():cartItem[]{
        return this.Items;
    }

    getIsShow():boolean{
        return this.isshow;
    }
}