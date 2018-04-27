import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangeMessageComponent } from './strange-message.component';

describe('StrangeMessageComponent', () => {
  let component: StrangeMessageComponent;
  let fixture: ComponentFixture<StrangeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrangeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
