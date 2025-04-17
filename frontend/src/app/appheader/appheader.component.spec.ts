import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderComponent } from './appheader.component';

describe('AppheaderComponent', () => {
  let component: AppheaderComponent;
  let fixture: ComponentFixture<AppheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppheaderComponent]
    });
    fixture = TestBed.createComponent(AppheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
