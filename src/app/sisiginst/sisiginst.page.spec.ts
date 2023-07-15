import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SisiginstPage } from './sisiginst.page';

describe('SisiginstPage', () => {
  let component: SisiginstPage;
  let fixture: ComponentFixture<SisiginstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SisiginstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
