import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResearchComponent } from './home-research.component';

describe('HomeResearchComponent', () => {
  let component: HomeResearchComponent;
  let fixture: ComponentFixture<HomeResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
