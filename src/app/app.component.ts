import { Component } from '@angular/core';
import {Product} from './product';

@Component({
   selector: 'app-root',
  template: `
          <h1>{{title}}</h1>
          <h2>My Products</h2>
          <ul class="products">
            <li *ngFor="let product of products" [class.selected]="product === selectedProduct" (click)="onSelect(product)">
                <span class="badge">{{product.Id}}</span> {{product.Name}}
            </li>
          </ul>
          <product-detail [product]="selectedProduct"></product-detail>
          `,
  styles: [`
          .selected {
            background-color: #CFD8DC !important;
            color: white;
          }
          .products {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
          }
          .products li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
          }
          .products li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
          }
          .products li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
          }
          .products .text {
            position: relative;
            top: -3px;
          }
          .products .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
          }
  `]
})
export class AppComponent {
  title = 'Tour of Products';

  selectedProduct=null;
  products=Products;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}

const Products: Product[] = [
  { Id: 1, Name: 'Iphone 6plux', Description:'No more create', Price:999.99, Condition:'new', Category:'Phone'},
  { Id: 2, Name: 'Surface', Description:'More than you can imagine', Price:1999.99, Condition:'new', Category:'PC'},
  { Id: 3, Name: 'Addiass pants', Description:'It is time for changing now', Price:19.99, Condition:'discount', Category:'Clothes'},
  { Id: 4, Name: 'Chicken', Description:'Fresh!', Price:4.9, Condition:'new', Category:'Food'},
  { Id: 5, Name: 'Coca cola', Description:'High up!', Price:0.49, Condition:'new', Category:'Drink'},
  { Id: 6, Name: 'MWA', Description:'Let us enjoy programming!', Price:1, Condition:'used', Category:'Book'},
];