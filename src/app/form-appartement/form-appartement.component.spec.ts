import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppartementComponent } from './form-appartement.component';

describe('FormAppartementComponent', () => {
  let component: FormAppartementComponent;
  let fixture: ComponentFixture<FormAppartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAppartementComponent]
    });
    fixture = TestBed.createComponent(FormAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
