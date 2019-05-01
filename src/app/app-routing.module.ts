import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'stock', loadChildren: './entity-operations/stock-item/stock-item.module#StockItemModule'},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent},
      { path: '500', component: InternalServerComponent },
      // { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
