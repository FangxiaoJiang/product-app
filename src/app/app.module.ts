import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import {calculateTotalFeePipe} from './cart/countpipe';
import {ProductFormComponent} from './form/product-form.component';
import {uniqueIdDirective} from './form/uniqueId';
import {ProductsComponent} from './product/products.component';
import {ProductService} from './product/product.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartDetailComponent,
    calculateTotalFeePipe,
    ProductFormComponent,
    uniqueIdDirective,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
//    HttpModule,
 //   InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
