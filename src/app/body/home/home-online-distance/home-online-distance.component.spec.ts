import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlineDistanceComponent } from './home-online-distance.component';

describe('HomeOnlineDistanceComponent', () => {
  let component: HomeOnlineDistanceComponent;
  let fixture: ComponentFixture<HomeOnlineDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOnlineDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlineDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
