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

@NgModule({
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
