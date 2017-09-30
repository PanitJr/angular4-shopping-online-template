import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOpenfarmComponent } from './home-openfarm.component';

describe('HomeOpenfarmComponent', () => {
  let component: HomeOpenfarmComponent;
  let fixture: ComponentFixture<HomeOpenfarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOpenfarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOpenfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
