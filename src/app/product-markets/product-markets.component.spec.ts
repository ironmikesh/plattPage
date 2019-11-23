import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMarketsComponent } from './product-markets.component';

describe('ProductMarketsComponent', () => {
  let component: ProductMarketsComponent;
  let fixture: ComponentFixture<ProductMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
