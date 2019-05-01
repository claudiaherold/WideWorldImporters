import { Component, OnInit } from '@angular/core';
import { RepositoryService} from './../../../shared/services/repository.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockItemDetails } from './../../../_interfaces/stock-item-details.model';

@Component({
  selector: 'app-stock-item-details',
  templateUrl: './stock-item-details.component.html',
  styleUrls: ['./stock-item-details.component.css']
})
export class StockItemDetailsComponent implements OnInit {
  public stockItem: StockItemDetails;
  public errorMessage = '';
  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
              private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getStockItemDetails();
  }
  public getStockItemDetails() {
    const id = this.activeRoute.snapshot.params.id;
    const apiAddress = `api/Warehouse/StockItem/${id}`;

    this.repository.getData(apiAddress)
        .subscribe((data) => this.displaydata(data),
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  private displaydata(data) {this.stockItem = data.model; }
}
