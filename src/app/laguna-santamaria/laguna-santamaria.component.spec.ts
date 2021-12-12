import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunaSantamariaComponent } from './laguna-santamaria.component';

describe('LagunaSantamariaComponent', () => {
  let component: LagunaSantamariaComponent;
  let fixture: ComponentFixture<LagunaSantamariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunaSantamariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunaSantamariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
