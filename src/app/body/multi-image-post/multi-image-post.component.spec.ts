import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImagePostComponent } from './multi-image-post.component';

describe('MultiImagePostComponent', () => {
  let component: MultiImagePostComponent;
  let fixture: ComponentFixture<MultiImagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiImagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
