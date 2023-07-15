import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisigingredPage } from './sisigingred.page';

describe('SisigingredPage', () => {
  let component: SisigingredPage;
  let fixture: ComponentFixture<SisigingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SisigingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
