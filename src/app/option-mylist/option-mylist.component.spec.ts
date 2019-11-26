import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMylistComponent } from './option-mylist.component';

describe('OptionMylistComponent', () => {
  let component: OptionMylistComponent;
  let fixture: ComponentFixture<OptionMylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionMylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionMylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
