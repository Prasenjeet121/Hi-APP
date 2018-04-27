import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowSuggestionComponent } from './follow-suggestion.component';

describe('FollowSuggestionComponent', () => {
  let component: FollowSuggestionComponent;
  let fixture: ComponentFixture<FollowSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
