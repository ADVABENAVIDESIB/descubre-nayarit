import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantuarioComponent } from './santuario.component';

describe('SantuarioComponent', () => {
  let component: SantuarioComponent;
  let fixture: ComponentFixture<SantuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
