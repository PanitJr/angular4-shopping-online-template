import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutHoneyComponent } from './home-about-honey.component';

describe('HomeAboutHoneyComponent', () => {
  let component: HomeAboutHoneyComponent;
  let fixture: ComponentFixture<HomeAboutHoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAboutHoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutHoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
