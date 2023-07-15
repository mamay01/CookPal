import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfritadaPage } from './afritada.page';

describe('AfritadaPage', () => {
  let component: AfritadaPage;
  let fixture: ComponentFixture<AfritadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfritadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
