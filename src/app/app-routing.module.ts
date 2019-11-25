import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', redirectTo: '' },
    { path: 'catalog', component: CatalogComponent, pathMatch: 'full' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 




// import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { CatalogComponent } from './catalog/catalog.component';

// const routes: Routes = [
//     { path: '', component: HomeComponent },
//     { path: 'catalog', component: CatalogComponent },

//     // otherwise redirect to home
//     { path: '**', redirectTo: '' }
// ];

// export const appRoutingModule = RouterModule.forRoot(routes);

