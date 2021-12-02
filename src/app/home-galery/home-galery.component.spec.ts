import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGaleryComponent } from './home-galery.component';

describe('HomeGaleryComponent', () => {
  let component: HomeGaleryComponent;
  let fixture: ComponentFixture<HomeGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
