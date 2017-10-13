import { Component,Input } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'product-detail',
  template: `
  <div *ngIf="product">
    <h2>{{product.Name}} details!</h2>
    <table>
      <tr>
        <td align='right'>Id:</td>
        <td align='left'><input [(ngModel)]="product.Id" placeholder="Id"></td>
      </tr>
      <tr>
        <td align='right'>Name:</td>
        <td align='left'><input [(ngModel)]="product.Name" placeholder="Name"></td>
      </tr>
      <tr>
        <td align='right'>Description:</td>
        <td align='left'><input [(ngModel)]="product.Description" placeholder="Description"></td>
      </tr>
      <tr>
        <td align='right'>Price:</td>
        <td align='left'><input [(ngModel)]="product.Price" placeholder="Price"></td>
      </tr>
      <tr>
        <td align='right'>Condition:</td>
        <td align='left'><input [(ngModel)]="product.Condition" placeholder="Condition"></td>
      </tr>
      <tr>
        <td align='right'>Category:</td>
        <td align='left'><input [(ngModel)]="product.Category" placeholder="Category"></td>
      </tr>
    </table>
  </div>`,
  styles: []
})
export class ProductDetailComponent {
  @Input()
    product:Product;
}