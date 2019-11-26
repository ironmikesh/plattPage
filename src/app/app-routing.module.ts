import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OptionPIMComponent } from './option-pim/option-pim.component';
import { OptionMylistComponent } from './option-mylist/option-mylist.component';
import { OptionLivehelpComponent } from './option-livehelp/option-livehelp.component';
import { OptionAccountComponent } from './option-account/option-account.component';
import { OptionBranchlocationsComponent } from './option-branchlocations/option-branchlocations.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: '' },
    { path: 'catalog', component: CatalogComponent, pathMatch: 'full' },
    { path: 'option-pim', component: OptionPIMComponent, pathMatch: 'full' },
    { path: 'option-mylist', component: OptionMylistComponent, pathMatch: 'full' },
    { path: 'option-livehelp', component: OptionLivehelpComponent, pathMatch: 'full' },
    { path: 'option-account', component: OptionAccountComponent, pathMatch: 'full' },
    { path: 'option-branchlocations', component: OptionBranchlocationsComponent, pathMatch: 'full' },
    
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

