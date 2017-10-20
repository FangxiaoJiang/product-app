import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductsComponent }      from './product/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products',     component: ProductsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}