import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManageComponent } from './productmanagement.component';
import { AddProductComponent } from './addproduct/addproduct.component';
import { UpdateProductComponent } from './updateproduct/updateproduct.component';
import { DeleteProductComponent } from './deleteproduct/products.component';
import { ShowProductComponent } from './showproduct/products.component';
import { AuthAdminGuard,AuthLoginGuard } from '../routerguard/routerguard.component';
  
const routes: Routes = [
  { path: '', redirectTo: '/productmanagement', pathMatch: 'full' ,canActivate: [AuthAdminGuard],},
  { path: 'productmanagement',  component: ProductManageComponent ,canActivate: [AuthAdminGuard],},
  { path: 'add',  component: AddProductComponent ,canActivate: [AuthAdminGuard],},
  { path: 'update',  component: UpdateProductComponent ,canActivate: [AuthAdminGuard],},
  { path: 'delete',  component: DeleteProductComponent ,canActivate: [AuthAdminGuard],},
  { path: 'show',  component: ShowProductComponent ,canActivate: [AuthAdminGuard],},
];
 
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductManageRoutingModule {}