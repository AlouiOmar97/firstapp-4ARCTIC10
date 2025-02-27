import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResidenceComponent } from './update-residence.component';

describe('UpdateResidenceComponent', () => {
  let component: UpdateResidenceComponent;
  let fixture: ComponentFixture<UpdateResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResidenceComponent]
    });
    fixture = TestBed.createComponent(UpdateResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
