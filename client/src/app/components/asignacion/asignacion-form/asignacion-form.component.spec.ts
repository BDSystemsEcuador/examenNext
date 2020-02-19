import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionFormComponent } from './asignacion-form.component';

describe('AsignacionFormComponent', () => {
  let component: AsignacionFormComponent;
  let fixture: ComponentFixture<AsignacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
