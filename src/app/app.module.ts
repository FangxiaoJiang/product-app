import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import {calculateTotalFeePipe} from './cart/countpipe';
import {ProductsComponent} from './product/products.component';
import {ProductService} from './product/product.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClient,HttpClientModule }    from '@angular/common/http';
import { ProductManageModule } from './productmanagement/productmanagement.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartDetailComponent,
    calculateTotalFeePipe,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductManageModule
  ],
  providers: [ProductService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
