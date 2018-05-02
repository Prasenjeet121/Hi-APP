import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosHomePostComponent } from './photos-home-post.component';

describe('PhotosHomePostComponent', () => {
  let component: PhotosHomePostComponent;
  let fixture: ComponentFixture<PhotosHomePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosHomePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosHomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
