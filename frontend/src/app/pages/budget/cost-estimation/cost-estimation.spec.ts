import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEstimation } from './cost-estimation';

describe('CostEstimation', () => {
  let component: CostEstimation;
  let fixture: ComponentFixture<CostEstimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostEstimation],
    }).compileComponents();

    fixture = TestBed.createComponent(CostEstimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
