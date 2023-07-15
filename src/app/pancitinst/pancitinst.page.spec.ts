import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PancitinstPage } from './pancitinst.page';

describe('PancitinstPage', () => {
  let component: PancitinstPage;
  let fixture: ComponentFixture<PancitinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PancitinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
