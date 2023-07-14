import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShanghaiinstPage } from './shanghaiinst.page';

describe('ShanghaiinstPage', () => {
  let component: ShanghaiinstPage;
  let fixture: ComponentFixture<ShanghaiinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShanghaiinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
