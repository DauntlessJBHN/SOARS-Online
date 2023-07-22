import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitReportPage } from './submit-report.page';

describe('SubmitReportPage', () => {
  let component: SubmitReportPage;
  let fixture: ComponentFixture<SubmitReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmitReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
