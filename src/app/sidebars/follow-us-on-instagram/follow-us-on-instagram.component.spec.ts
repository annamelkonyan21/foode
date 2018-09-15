import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsOnInstagramComponent } from './follow-us-on-instagram.component';

describe('FollowUsOnInstagramComponent', () => {
  let component: FollowUsOnInstagramComponent;
  let fixture: ComponentFixture<FollowUsOnInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUsOnInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUsOnInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
