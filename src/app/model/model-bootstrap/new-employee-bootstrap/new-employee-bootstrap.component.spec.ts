import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeBootstrapComponent } from './new-employee-bootstrap.component';

describe('NewEmployeeBoostrapComponent', () => {
  let component: NewEmployeeBootstrapComponent;
  let fixture: ComponentFixture<NewEmployeeBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEmployeeBootstrapComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewEmployeeBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
