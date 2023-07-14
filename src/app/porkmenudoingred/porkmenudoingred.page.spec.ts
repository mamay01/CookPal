import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorkmenudoingredPage } from './porkmenudoingred.page';

describe('PorkmenudoingredPage', () => {
  let component: PorkmenudoingredPage;
  let fixture: ComponentFixture<PorkmenudoingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PorkmenudoingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
