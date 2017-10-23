import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AddProductComponent } from './addproduct.component';
import { uniqueIdDirective } from './uniqueId';

@NgModule({
  declarations: [
    AddProductComponent,
    uniqueIdDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
 ],
})
export class AddProductModule { }
