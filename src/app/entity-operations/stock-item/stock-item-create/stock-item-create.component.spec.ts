import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemCreateComponent } from './stock-item-create.component';

describe('StockItemCreateComponent', () => {
  let component: StockItemCreateComponent;
  let fixture: ComponentFixture<StockItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
