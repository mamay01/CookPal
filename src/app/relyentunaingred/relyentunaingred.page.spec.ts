import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelyentunaingredPage } from './relyentunaingred.page';

describe('RelyentunaingredPage', () => {
  let component: RelyentunaingredPage;
  let fixture: ComponentFixture<RelyentunaingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RelyentunaingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
