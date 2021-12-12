import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagunaMoraComponent } from './laguna-mora.component';

describe('LagunaMoraComponent', () => {
  let component: LagunaMoraComponent;
  let fixture: ComponentFixture<LagunaMoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagunaMoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagunaMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
