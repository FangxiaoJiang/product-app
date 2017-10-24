import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AddProductComponent } from './addproduct.component';
import { uniqueIdDirective } from './uniqueId';
import { ConfirmDirective } from './comfirm.component';

@NgModule({
  declarations: [
    AddProductComponent,
    uniqueIdDirective,
    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
 ],
})
export class AddProductModule { }
