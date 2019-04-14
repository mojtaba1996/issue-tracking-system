import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostACaseComponent } from './post-a-case.component';

describe('PostACaseComponent', () => {
  let component: PostACaseComponent;
  let fixture: ComponentFixture<PostACaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostACaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostACaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
