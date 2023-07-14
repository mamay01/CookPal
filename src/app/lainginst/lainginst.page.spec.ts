import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LainginstPage } from './lainginst.page';

describe('LainginstPage', () => {
  let component: LainginstPage;
  let fixture: ComponentFixture<LainginstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LainginstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
