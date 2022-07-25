import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {    path :'', component:AppComponent },
  {    path :'product', component:ProductComponent  },
  {    path :'product-view/:id', component:ProductViewComponent  },
  {    path :'newProduct', component:AddProductComponent  },
  {    path :'editProduct/:id', component:EditProductComponent  },
  {    path :'newCategory', component:CreateCategoryProductComponent  },
  {    path :'listCategory', component:ListCategoryProductComponent  },
  {    path :'editCategory/:id', component:EditCategoryProductComponent  },
  {    path :'category-view/:id', component:CategoryViewProductComponent  },
  {    path :'#', component:AppComponent  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
