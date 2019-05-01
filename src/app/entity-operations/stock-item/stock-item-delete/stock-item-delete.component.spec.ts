import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemDeleteComponent } from './stock-item-delete.component';

describe('StockItemDeleteComponent', () => {
  let component: StockItemDeleteComponent;
  let fixture: ComponentFixture<StockItemDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
