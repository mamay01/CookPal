import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SopasinstPage } from './sopasinst.page';

describe('SopasinstPage', () => {
  let component: SopasinstPage;
  let fixture: ComponentFixture<SopasinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SopasinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
