import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHomePostComponent } from './text-home-post.component';

describe('TextHomePostComponent', () => {
  let component: TextHomePostComponent;
  let fixture: ComponentFixture<TextHomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
