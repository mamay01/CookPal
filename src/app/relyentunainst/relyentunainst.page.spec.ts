import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelyentunainstPage } from './relyentunainst.page';

describe('RelyentunainstPage', () => {
  let component: RelyentunainstPage;
  let fixture: ComponentFixture<RelyentunainstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RelyentunainstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
