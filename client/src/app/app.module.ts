import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

//importation of ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

//import Route module
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
//import HTTP Client module
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavPartialComponent } from './components/nav-partial/nav-partial.component';
import { FooterPartialComponent } from './components/footer-partial/footer-partial.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './components/search/search.component';

// todo : deplacer les routes dans app-routing-module.ts
const appRoutes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: '' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'products' , component: LoginComponent},
  {path: 'products/:id' , component: LoginComponent},
  {path: 'category/:id' , component: LoginComponent},
  {path: 'categories' , component: CategoriesComponent},
  {path: 'admin/login' , component: RegisterComponent},
  {path: 'admin/dashboard' , component: AdminDashboardComponent},
  {path: 'cart' , component: AdminDashboardComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'search' , component: SearchComponent},
  { path: '**', component: PageNotFoundComponent }
];

export function tokenGetter() {
  return localStorage.getItem("access_token");
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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    JwtModule.forRoot({
    config: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ["localhost:4200"],
    blacklistedRoutes: ["localhost:4200/api/users/login"]
  }
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
