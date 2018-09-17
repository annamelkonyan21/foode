import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoshialMediaComponent } from './soshial-media.component';

describe('SoshialMediaComponent', () => {
  let component: SoshialMediaComponent;
  let fixture: ComponentFixture<SoshialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoshialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoshialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
