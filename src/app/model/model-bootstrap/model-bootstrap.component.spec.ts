import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBootstrapComponent } from './model-bootstrap.component';

describe('ModelBoostrapComponent', () => {
  let component: ModelBootstrapComponent;
  let fixture: ComponentFixture<ModelBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
