import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationList } from './loanapplication-list';

describe('LoanapplicationList', () => {
  let component: LoanapplicationList;
  let fixture: ComponentFixture<LoanapplicationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanapplicationList],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanapplicationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
