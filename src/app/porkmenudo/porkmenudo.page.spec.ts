import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorkmenudoPage } from './porkmenudo.page';

describe('PorkmenudoPage', () => {
  let component: PorkmenudoPage;
  let fixture: ComponentFixture<PorkmenudoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PorkmenudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
