import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickenadoboPage } from './chickenadobo.page';

describe('ChickenadoboPage', () => {
  let component: ChickenadoboPage;
  let fixture: ComponentFixture<ChickenadoboPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickenadoboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
