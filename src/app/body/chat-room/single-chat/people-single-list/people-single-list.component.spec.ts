import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSingleListComponent } from './people-single-list.component';

describe('PeopleSingleListComponent', () => {
  let component: PeopleSingleListComponent;
  let fixture: ComponentFixture<PeopleSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSingleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
