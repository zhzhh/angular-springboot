import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { ProductService } from './shared/product.service';
import { LogService } from './shared/log.service';
import { AnotherproductService } from './shared/anotherproduct.service';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Upper, FilterForm } from './shared/pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    HomeComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailComponent,
    Upper,
    FilterForm
  ],
  imports: [
    BrowserModule,
    FormsModule   ,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LogService, appConfig) =>{
        if (appConfig.isDev){
          return new ProductService(logger);
        }else{
          return new AnotherproductService(logger);
        }
      },
      deps: [LogService, "APP_CONFIG"]
    },
    {
      provide: "APP_CONFIG",
      useValue:{isDev: true}
    },
    LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
