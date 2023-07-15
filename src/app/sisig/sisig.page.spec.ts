import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisigPage } from './sisig.page';

describe('SisigPage', () => {
  let component: SisigPage;
  let fixture: ComponentFixture<SisigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SisigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
