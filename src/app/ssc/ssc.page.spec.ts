import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SscPage } from './ssc.page';

describe('SscPage', () => {
  let component: SscPage;
  let fixture: ComponentFixture<SscPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
