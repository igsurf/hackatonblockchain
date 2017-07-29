import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsyncComponent } from './atmsync.component';

describe('AtmsyncComponent', () => {
  let component: AtmsyncComponent;
  let fixture: ComponentFixture<AtmsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
