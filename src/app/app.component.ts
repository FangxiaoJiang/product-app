import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
  template: `<h1>{{title}}</h1>
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

             </table>`,
  styles: []
})
export class AppComponent {
  title = 'Tour of Products';
  product:Product = {
    Id:1,
    Name:'iphone 6plux',
    Description:'very cheap',
    Price:999.99,
    Condition:'new',
    Category:'phone'
  }
}
export class Product{
  Id:number;
  Name:string;
  Description:string;
  Price:number;
  Condition:string;
  Category:string
}