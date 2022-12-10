import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMaterialComponent } from './model-material.component';

describe('ModelMaterialComponent', () => {
  let component: ModelMaterialComponent;
  let fixture: ComponentFixture<ModelMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
