import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
import { OptionPIMComponent } from './option-pim/option-pim.component';
import { OptionMylistComponent } from './option-mylist/option-mylist.component';
import { OptionLivehelpComponent } from './option-livehelp/option-livehelp.component';
import { OptionAccountComponent } from './option-account/option-account.component';
import { OptionBranchlocationsComponent } from './option-branchlocations/option-branchlocations.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
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
    HomeComponent,
    OptionPIMComponent,
    OptionMylistComponent,
    OptionLivehelpComponent,
    OptionAccountComponent,
    OptionBranchlocationsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
