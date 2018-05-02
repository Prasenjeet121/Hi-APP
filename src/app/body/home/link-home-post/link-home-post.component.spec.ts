import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHomePostComponent } from './link-home-post.component';

describe('LinkHomePostComponent', () => {
  let component: LinkHomePostComponent;
  let fixture: ComponentFixture<LinkHomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkHomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
