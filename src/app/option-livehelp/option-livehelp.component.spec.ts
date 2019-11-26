import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionLivehelpComponent } from './option-livehelp.component';

describe('OptionLivehelpComponent', () => {
  let component: OptionLivehelpComponent;
  let fixture: ComponentFixture<OptionLivehelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionLivehelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionLivehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
