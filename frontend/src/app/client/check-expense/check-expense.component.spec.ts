import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckExpenseComponent } from './check-expense.component';

describe('CheckExpenseComponent', () => {
  let component: CheckExpenseComponent;
  let fixture: ComponentFixture<CheckExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
