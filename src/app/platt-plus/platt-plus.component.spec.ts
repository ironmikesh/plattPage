import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlattPlusComponent } from './platt-plus.component';

describe('PlattPlusComponent', () => {
  let component: PlattPlusComponent;
  let fixture: ComponentFixture<PlattPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlattPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlattPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
