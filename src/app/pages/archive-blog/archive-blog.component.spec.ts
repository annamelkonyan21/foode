import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBlogComponent } from './archive-blog.component';

describe('ArchiveBlogComponent', () => {
  let component: ArchiveBlogComponent;
  let fixture: ComponentFixture<ArchiveBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
