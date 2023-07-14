import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickenadinstPage } from './chickenadinst.page';

describe('ChickenadinstPage', () => {
  let component: ChickenadinstPage;
  let fixture: ComponentFixture<ChickenadinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickenadinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
