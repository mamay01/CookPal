import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelyentunaPage } from './relyentuna.page';

describe('RelyentunaPage', () => {
  let component: RelyentunaPage;
  let fixture: ComponentFixture<RelyentunaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RelyentunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
