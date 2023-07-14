import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BangusinstPage } from './bangusinst.page';

describe('BangusinstPage', () => {
  let component: BangusinstPage;
  let fixture: ComponentFixture<BangusinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BangusinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
