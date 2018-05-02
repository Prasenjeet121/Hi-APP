import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAdditionComponent } from './group-addition.component';

describe('GroupAdditionComponent', () => {
  let component: GroupAdditionComponent;
  let fixture: ComponentFixture<GroupAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
