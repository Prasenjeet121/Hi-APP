import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosHomePostComponent } from './videos-home-post.component';

describe('VideosHomePostComponent', () => {
  let component: VideosHomePostComponent;
  let fixture: ComponentFixture<VideosHomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosHomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosHomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
