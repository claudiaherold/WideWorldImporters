import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemUpdateComponent } from './stock-item-update.component';

describe('StockItemUpdateComponent', () => {
  let component: StockItemUpdateComponent;
  let fixture: ComponentFixture<StockItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
