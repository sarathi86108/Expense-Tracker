import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientheaderComponent } from './clientheader.component';

describe('ClientheaderComponent', () => {
  let component: ClientheaderComponent;
  let fixture: ComponentFixture<ClientheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientheaderComponent]
    });
    fixture = TestBed.createComponent(ClientheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
