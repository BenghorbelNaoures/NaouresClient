import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListProgrammeComponent } from './Programme/list-programme/list-programme.component';
import { FooterComponent } from './footer/footer.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { QRCodeModule } from "angular2-qrcode";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListProgrammeComponent,
    FooterComponent,
    ProductViewComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    CreateCategoryProductComponent,
    ListCategoryProductComponent,
    EditCategoryProductComponent,
    CategoryViewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//pour les formulaires -->pour utiliser le "ngModel"
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
