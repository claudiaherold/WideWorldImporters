import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register' ;
import { AuthGuard } from './_guards';
import { Role } from './_models';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
      { path: 'stock', loadChildren: './entity-operations/stock-item/stock-item.module#StockItemModule'},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent},
      { path: '500', component: InternalServerComponent },
      // { path: '**', redirectTo: '/404', pathMatch: 'full'}
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
        // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
