import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBranchlocationsComponent } from './option-branchlocations.component';

describe('OptionBranchlocationsComponent', () => {
  let component: OptionBranchlocationsComponent;
  let fixture: ComponentFixture<OptionBranchlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionBranchlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionBranchlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
