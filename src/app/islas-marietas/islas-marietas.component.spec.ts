import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslasMarietasComponent } from './islas-marietas.component';

describe('IslasMarietasComponent', () => {
  let component: IslasMarietasComponent;
  let fixture: ComponentFixture<IslasMarietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslasMarietasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslasMarietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
