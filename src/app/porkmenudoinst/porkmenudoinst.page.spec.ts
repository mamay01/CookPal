import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorkmenudoinstPage } from './porkmenudoinst.page';

describe('PorkmenudoinstPage', () => {
  let component: PorkmenudoinstPage;
  let fixture: ComponentFixture<PorkmenudoinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PorkmenudoinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
