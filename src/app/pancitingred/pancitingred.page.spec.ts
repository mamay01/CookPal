import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PancitingredPage } from './pancitingred.page';

describe('PancitingredPage', () => {
  let component: PancitingredPage;
  let fixture: ComponentFixture<PancitingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PancitingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
