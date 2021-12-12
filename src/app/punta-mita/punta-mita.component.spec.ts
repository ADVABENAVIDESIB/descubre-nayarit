import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntaMitaComponent } from './punta-mita.component';

describe('PuntaMitaComponent', () => {
  let component: PuntaMitaComponent;
  let fixture: ComponentFixture<PuntaMitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntaMitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntaMitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
