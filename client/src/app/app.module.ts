import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

// importation of ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import Route module
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
// import HTTP Client module
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { NavPartialComponent } from './components/nav-partial/nav-partial.component';
import { FooterPartialComponent } from './components/footer-partial/footer-partial.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductAdminPanelComponent } from './components/admin/product/product-admin-panel/product-admin-panel.component';
import { CategoryAdminPanelComponent } from './components/admin/category/category-admin-panel/category-admin-panel.component';
import { DeleteCategoryModalComponent } from './components/admin/category/delete-category-modal/delete-category-modal.component';
import { CreateCategoryComponent } from './components/admin/category/create-category/create-category.component';
import { CreateProductComponent } from './components/admin/product/create-product/create-product.component';
import { EditCategoryComponent } from './components/admin/category/edit-category/edit-category.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';

// todo : deplacer les routes dans app-routing-module.ts
const appRoutes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: '' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'products' , component: AllProductsComponent},
  {path: 'products/:name' , component: ProductViewComponent},
  {path: 'categories/:name' , component: ProductListComponent},
  {path: 'categories' , component: CategoriesComponent},
  {path: 'admin/login' , component: RegisterComponent},
  {path: 'admin/dashboard' , component: AdminDashboardComponent},
  {path: 'admin/dashboard/categories' , component: CategoryAdminPanelComponent},
  {path: 'admin/dashboard/products' , component: ProductAdminPanelComponent},
  {path: 'admin/category/create' , component: CreateCategoryComponent},
  {path: 'admin/category/edit/:name' , component: EditCategoryComponent},
  {path: 'admin/product/create' , component: CreateProductComponent},
  {path: 'cart' , component: AdminDashboardComponent},
  {path: 'about' , component: AboutComponent},
  { path: '**', component: PageNotFoundComponent }
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductViewComponent,
    CartViewComponent,
    AdminDashboardComponent,
    NavPartialComponent,
    FooterPartialComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    ProductAdminPanelComponent,
    CategoryAdminPanelComponent,
    DeleteCategoryModalComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    EditCategoryComponent,
    SingleProductComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    JwtModule.forRoot({
    config: {
    tokenGetter,
    whitelistedDomains: ['localhost:4200'],
    blacklistedRoutes: ['localhost:4200/api/users/login']
  }
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
