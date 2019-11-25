import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { OptionsComponent } from './options/options.component';
import { ProductMarketsComponent } from './product-markets/product-markets.component';
import { PlattPlusComponent } from './platt-plus/platt-plus.component';
import { CardsComponent } from './cards/cards.component';
import { GetComponent } from './get/get.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    OptionsComponent,
    ProductMarketsComponent,
    PlattPlusComponent,
    CardsComponent,
    GetComponent,
    SupportCenterComponent,
    FooterComponent,
    CatalogComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
