import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnnonceComponent } from './list-annonce.component';

describe('ListAnnonceComponent', () => {
  let component: ListAnnonceComponent;
  let fixture: ComponentFixture<ListAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAnnonceComponent]
    });
    fixture = TestBed.createComponent(ListAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
