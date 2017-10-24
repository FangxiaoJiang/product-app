import { Component,Input,OnInit } from '@angular/core';
import {Product,Conditions} from '../product/product';
import {CartService} from './cart.service'; 
import {cartItem} from './cart-item';
import {UserService} from '../user/user.service';

@Component({
  selector: 'cart-detail',
  template: `
  <input type="button" value='Add to Cart' (click)="cartservice.add_product(product)">
  <input type="button" value='Show Cart' (click)="cartservice.changeState()">
  <input type="button" value='Checkout' (click)="checkout()">
  <p>You have orderd {{cartservice.getTotal()}} products on your cart.</p>
  <div *ngIf="cartservice.getIsShow()">
    <thead>
      <tr>
        <td>Name</td>
        <td>Single Price</td>
        <td>Quantity</td>
        <td>Fees</td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items">
        <td>{{item.product.name}}</td>
        <td>{{(item.product.price).toFixed(2)}}</td>
        <td>{{item.quantity}}</td>
        <td>{{(item.product|totalfee:item.quantity).toFixed(2)}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>total:</td>
        <td></td>
        <td></td>
        <td>{{(cartservice.getAllFees()).toFixed(2)}}</td>
      </tr>
    </tfoot>
  </div>`,
  styles: [`
  thead, tfoot, tbody, th , td {
    border: 1px solid grey;
    border-collapse: collapse;
    padding: 5px;
  }
  
  tbody tr:nth-child(odd) {
    background-color: #f1f1f1;
  }
  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }`],
  providers:[CartService]
})
export class CartDetailComponent implements OnInit {
  @Input()
    product:Product;
  items:cartItem[];
  constructor(private cartservice:CartService,private userservice:UserService){};
  ngOnInit(){
    this.items=this.cartservice.getItems();
  }
  checkout(){
    if(this.userservice.getLoginState()){
      console.log("you have been loginning");
    }
    else
      window.alert("Please Login!");
  }
}