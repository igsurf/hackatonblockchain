import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRoutesComponent } from './application-routes.component';

describe('ApplicationRoutesComponent', () => {
  let component: ApplicationRoutesComponent;
  let fixture: ComponentFixture<ApplicationRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
