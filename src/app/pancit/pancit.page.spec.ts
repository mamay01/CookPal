import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PancitPage } from './pancit.page';

describe('PancitPage', () => {
  let component: PancitPage;
  let fixture: ComponentFixture<PancitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PancitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
