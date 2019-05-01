import { Component, OnInit } from '@angular/core';
import { StockItem } from './../../../_interfaces/stock-item.model';
import { RepositoryService} from './../../../shared/services/repository.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.css']
})
export class StockItemListComponent implements OnInit {
  public stockitems: StockItem[];
  public errorMessage = '';
  constructor( private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllStockItems();
  }

  public getAllStockItems() {

      const apiAddress = 'api/Warehouse/StockItem';

      this.repository.getData(apiAddress)
        //  .subscribe(data  => {this.stockitems = data.model as StockItem[]; });
          .subscribe((data) => this.displaydata(data),
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          }) ;
  }

  private displaydata(data) {this.stockitems = data.model; }

  public getStockItemDetails(id) {
      const detailUrl = `/stock/details/${id}`;
      this.router.navigate([detailUrl]);
  }

  public redirectToUpdatePage(id) {
    const updateUrl = `/stock/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage(id){
    const deleteUrl = `/stock/delete/${id}`;
    this.router.navigate([deleteUrl]);
  }

}
