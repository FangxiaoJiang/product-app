import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManageComponent } from './productmanagement.component';
import { AddProductComponent } from './addproduct/addproduct.component';
import { UpdateProductComponent } from './updateproduct/updateproduct.component';
import { DeleteProductComponent } from './deleteproduct/products.component';

  
const routes: Routes = [
  { path: '', redirectTo: '/productmanagement', pathMatch: 'full' },
  { path: 'productmanagement',  component: ProductManageComponent },
  { path: 'add',  component: AddProductComponent },
  { path: 'update',  component: UpdateProductComponent },
  { path: 'delete',  component: DeleteProductComponent },
];
 
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductManageRoutingModule {}