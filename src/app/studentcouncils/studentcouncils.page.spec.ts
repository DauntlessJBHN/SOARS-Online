import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentcouncilsPage } from './studentcouncils.page';

describe('StudentcouncilsPage', () => {
  let component: StudentcouncilsPage;
  let fixture: ComponentFixture<StudentcouncilsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentcouncilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
