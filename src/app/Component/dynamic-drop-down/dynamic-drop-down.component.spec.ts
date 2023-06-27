import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropDownComponent } from './dynamic-drop-down.component';

describe('DynamicDropDownComponent', () => {
  let component: DynamicDropDownComponent;
  let fixture: ComponentFixture<DynamicDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
