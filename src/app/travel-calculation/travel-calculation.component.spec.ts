import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCalculationComponent } from './travel-calculation.component';

describe('TravelCalculationComponent', () => {
  let component: TravelCalculationComponent;
  let fixture: ComponentFixture<TravelCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
