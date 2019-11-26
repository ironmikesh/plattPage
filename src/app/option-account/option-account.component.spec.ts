import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionAccountComponent } from './option-account.component';

describe('OptionAccountComponent', () => {
  let component: OptionAccountComponent;
  let fixture: ComponentFixture<OptionAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
