import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfritadaingredPage } from './afritadaingred.page';

describe('AfritadaingredPage', () => {
  let component: AfritadaingredPage;
  let fixture: ComponentFixture<AfritadaingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfritadaingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
