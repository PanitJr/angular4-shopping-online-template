import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsComponent } from './home-about-us.component';

describe('HomeAboutUsComponent', () => {
  let component: HomeAboutUsComponent;
  let fixture: ComponentFixture<HomeAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
