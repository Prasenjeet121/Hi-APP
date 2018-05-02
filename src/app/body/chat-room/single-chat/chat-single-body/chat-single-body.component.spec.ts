import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSingleBodyComponent } from './chat-single-body.component';

describe('ChatSingleBodyComponent', () => {
  let component: ChatSingleBodyComponent;
  let fixture: ComponentFixture<ChatSingleBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSingleBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSingleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
