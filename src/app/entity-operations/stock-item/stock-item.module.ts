import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StockItemCreateComponent } from './stock-item-create/stock-item-create.component';
import { StockItemDeleteComponent } from './stock-item-delete/stock-item-delete.component';
import { StockItemUpdateComponent } from './stock-item-update/stock-item-update.component';
import { StockItemListComponent } from './stock-item-list/stock-item-list.component';
import { StockItemDetailsComponent } from './stock-item-details/stock-item-details.component';

import { SharedModule} from './../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: StockItemListComponent},
      { path: 'details/:id', component: StockItemDetailsComponent },
      { path: 'create', component: StockItemCreateComponent },
      { path: 'update/:id', component: StockItemUpdateComponent },
      { path: 'delete/:id', component: StockItemDeleteComponent }
    ])
  ],
  declarations: [
    StockItemListComponent,
    StockItemDetailsComponent,
    StockItemCreateComponent,
    StockItemUpdateComponent,
    StockItemDeleteComponent
  ]
})
export class StockItemModule { }
