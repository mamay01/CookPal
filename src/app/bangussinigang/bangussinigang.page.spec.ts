import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BangussinigangPage } from './bangussinigang.page';

describe('BangussinigangPage', () => {
  let component: BangussinigangPage;
  let fixture: ComponentFixture<BangussinigangPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BangussinigangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
