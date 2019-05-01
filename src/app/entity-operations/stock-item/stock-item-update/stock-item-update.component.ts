import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService} from './../../../shared/services/repository.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockItemDetails } from './../../../_interfaces/stock-item-details.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stock-item-update',
  templateUrl: './stock-item-update.component.html',
  styleUrls: ['./stock-item-update.component.css']
})
export class StockItemUpdateComponent implements OnInit {
  public errorMessage = '';
  public stock: StockItemDetails;
  public stockItemForm: FormGroup;
  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router,
              private activeRoute: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.stockItemForm = new FormGroup({
      stockItemName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfCreation: new FormControl('', [Validators.required]),
      searchDetails: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

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

  private displaydata(data) {this.stock = data.model;
                             this.stockItemForm.patchValue(this.stock);
                             $('#dateOfCreation').val(this.datePipe.transform(this.stock.validFrom, 'MM/dd/yyyy'));
  }

  public validateControl(controlName: string) {
    if (this.stockItemForm.controls[controlName].invalid && this.stockItemForm.controls[controlName].touched) {
      return true;
    }
    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.stockItemForm.controls[controlName].hasError(errorName)) {
      return true;
    }
    return false;
  }

  public executeDatePicker(event) {
    this.stockItemForm.patchValue({ dateOfCreation: event });
  }

  public redirectToStockItemList() {
    this.router.navigate(['/stock/list']);
  }

  public updateStockItem(stockItemForm) {
    if (this.stockItemForm.valid) {
      this.executeStockItemUpdate(stockItemForm);
    }
  }

  private executeStockItemUpdate(stockItemFormValue) {

    this.stock.stockItemName = stockItemFormValue.stockItemName,
    this.stock.validFrom = stockItemFormValue.dateOfCreation,
    this.stock.searchDetails = stockItemFormValue.searchDetails;

    const apiUrl = `api/Warehouse/StockItem/${this.stock.stockItemID}`;
    this.repository.update(apiUrl, this.stock)
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
