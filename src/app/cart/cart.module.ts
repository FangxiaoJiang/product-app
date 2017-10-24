import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CartDetailComponent } from './cart-detail.component';
import {calculateTotalFeePipe} from './countpipe';


@NgModule({
  declarations: [
    CartDetailComponent,
    calculateTotalFeePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
})
export class CartModule { }
