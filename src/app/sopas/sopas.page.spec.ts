import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SopasPage } from './sopas.page';

describe('SopasPage', () => {
  let component: SopasPage;
  let fixture: ComponentFixture<SopasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SopasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
