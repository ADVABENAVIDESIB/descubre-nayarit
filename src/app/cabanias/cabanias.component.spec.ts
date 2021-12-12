import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabaniasComponent } from './cabanias.component';

describe('CabaniasComponent', () => {
  let component: CabaniasComponent;
  let fixture: ComponentFixture<CabaniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabaniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
