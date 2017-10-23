import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ProductManageComponent } from './productmanagement.component';
import { ProductManageRoutingModule } from './productmanagement-routing.module';
import { AddProductModule } from './addproduct/addproduct.module';
import { UpdateProductModule } from './updateproduct/updateproduct.module';
import { DeleteProductComponent } from './deleteproduct/products.component';

@NgModule({
  declarations: [
    ProductManageComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductManageRoutingModule,
    AddProductModule,
    UpdateProductModule
  ],
})
export class ProductManageModule { }
