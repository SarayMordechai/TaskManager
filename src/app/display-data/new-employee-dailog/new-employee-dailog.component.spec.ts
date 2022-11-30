import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeDailogComponent } from './new-employee-dailog.component';

describe('NewEmployeeDailogComponent', () => {
  let component: NewEmployeeDailogComponent;
  let fixture: ComponentFixture<NewEmployeeDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmployeeDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
