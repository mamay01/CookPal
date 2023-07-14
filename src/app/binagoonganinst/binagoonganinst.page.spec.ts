import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinagoonganinstPage } from './binagoonganinst.page';

describe('BinagoonganinstPage', () => {
  let component: BinagoonganinstPage;
  let fixture: ComponentFixture<BinagoonganinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BinagoonganinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
