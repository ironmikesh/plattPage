import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPIMComponent } from './option-pim.component';

describe('OptionPIMComponent', () => {
  let component: OptionPIMComponent;
  let fixture: ComponentFixture<OptionPIMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionPIMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionPIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
