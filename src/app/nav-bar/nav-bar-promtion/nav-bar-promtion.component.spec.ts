import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPromtionComponent } from './nav-bar-promtion.component';

describe('NavBarPromtionComponent', () => {
  let component: NavBarPromtionComponent;
  let fixture: ComponentFixture<NavBarPromtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPromtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPromtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
