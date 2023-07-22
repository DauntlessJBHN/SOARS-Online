import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentorganizationsPage } from './studentorganizations.page';

describe('StudentorganizationsPage', () => {
  let component: StudentorganizationsPage;
  let fixture: ComponentFixture<StudentorganizationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentorganizationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
