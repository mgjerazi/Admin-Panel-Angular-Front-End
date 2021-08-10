import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryTableComponent} from './category-table/category-table.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductFormComponent} from './product-form/product-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductTableComponent},
  {path: 'products/manage', component: ProductFormComponent},
  {path: 'products/manage/:id', component: ProductFormComponent},
  {path: 'category', component: CategoryTableComponent},
  {path: 'category/manage', component: CategoryFormComponent},
  {path: 'category/manage/:id', component: CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
