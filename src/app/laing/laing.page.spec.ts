import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaingPage } from './laing.page';

describe('LaingPage', () => {
  let component: LaingPage;
  let fixture: ComponentFixture<LaingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
