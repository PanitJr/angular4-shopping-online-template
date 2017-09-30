import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuotationComponent } from './home-quotation.component';

describe('HomeQuotationComponent', () => {
  let component: HomeQuotationComponent;
  let fixture: ComponentFixture<HomeQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
