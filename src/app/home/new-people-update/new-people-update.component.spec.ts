import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeopleUpdateComponent } from './new-people-update.component';

describe('NewPeopleUpdateComponent', () => {
  let component: NewPeopleUpdateComponent;
  let fixture: ComponentFixture<NewPeopleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeopleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeopleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
