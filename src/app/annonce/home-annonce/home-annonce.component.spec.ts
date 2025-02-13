import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnnonceComponent } from './home-annonce.component';

describe('HomeAnnonceComponent', () => {
  let component: HomeAnnonceComponent;
  let fixture: ComponentFixture<HomeAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAnnonceComponent]
    });
    fixture = TestBed.createComponent(HomeAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
