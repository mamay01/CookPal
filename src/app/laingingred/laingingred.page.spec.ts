import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaingingredPage } from './laingingred.page';

describe('LaingingredPage', () => {
  let component: LaingingredPage;
  let fixture: ComponentFixture<LaingingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaingingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
