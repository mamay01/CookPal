import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinagoonganingredPage } from './binagoonganingred.page';

describe('BinagoonganingredPage', () => {
  let component: BinagoonganingredPage;
  let fixture: ComponentFixture<BinagoonganingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BinagoonganingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
