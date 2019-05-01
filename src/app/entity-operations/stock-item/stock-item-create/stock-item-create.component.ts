import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RepositoryService} from './../../../shared/services/repository.service';
import { ErrorHandlerService } from './../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

import { StockItemForCreation } from './../../../_interfaces/stock-item-for-creation.model';

@Component({
  selector: 'app-stock-item-create',
  templateUrl: './stock-item-create.component.html',
  styleUrls: ['./stock-item-create.component.css']
})
export class StockItemCreateComponent implements OnInit {
public errorMessage = '';
public stockItemForm: FormGroup;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.stockItemForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    dateOfCreation: new FormControl('', [Validators.required]),
    searchDetails: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public validateControl(controlName: string) {
    if (this.stockItemForm.controls[controlName].invalid &&
        this.stockItemForm.controls[controlName].touched) {
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

public createStockItem(StockItemFormValue) {
    if (this.stockItemForm.valid) {
      this.executeStockItemCreation(StockItemFormValue);
    }
  }

  private executeStockItemCreation(StockItemFormValue) {
    const stock: StockItemForCreation = {
      StockItemName: StockItemFormValue.name,
      supplierID: 15,
      colorID: 15,
      unitPackageID: 300,
      outerPackageID: 300,
      brand: 'newgreenlife',
      size: '10',
      leadTimeDays: 15,
      quantityPerOuter:  15,
      isChillerStock: true,
      barcode: '',
      taxRate: 1.5,
      unitPrice: 105.99,
      recommendedRetailPrice: 110,
      typicalWeightPerUnit: 300,
      marketingComments: '',
      internalComments: 'Producto Creado',
      customFields: '',
      tags: '[]',
      searchDetails: StockItemFormValue.searchDetails,
      lastEditedBy: 15,
      dateOfCreation: StockItemFormValue.dateOfCreation,
      validTo: null
    };
    const apiUrl = 'api/Warehouse/StockItem';
    this.repository.create(apiUrl, stock)
      .subscribe(res => {
        $('#successModal').modal();
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    );
  }

  public redirectToStockItemList() {
    this.router.navigate(['/stock/list']);
  }
}
