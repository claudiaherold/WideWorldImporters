import { Component, OnInit } from '@angular/core';
import { RepositoryService} from './../../../shared/services/repository.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockItemDetails } from './../../../_interfaces/stock-item-details.model';

@Component({
  selector: 'app-stock-item-delete',
  templateUrl: './stock-item-delete.component.html',
  styleUrls: ['./stock-item-delete.component.css']
})
export class StockItemDeleteComponent implements OnInit {
  public stock: StockItemDetails;
  public errorMessage = '';

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
              private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getStockItemById();
  }

  private getStockItemById() {
    const stockId: string = this.activeRoute.snapshot.params.id;

    const stockByIdUrl = `api/Warehouse/StockItem/${stockId}`;

    this.repository.getData(stockByIdUrl)
        .subscribe((data) => this.displaydata(data),
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });

  }

  private displaydata(data) {this.stock = data.model; }

  public redirectToStockItemList() {
    this.router.navigate(['/stock/list']);
  }

  public DeleteStockItem() {

    const apiUrl = `api/Warehouse/StockItem/${this.stock.stockItemID}`;
    this.repository.delete(apiUrl)
      .subscribe(res => {
        $('#successModal').modal();
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      );
  }
}

