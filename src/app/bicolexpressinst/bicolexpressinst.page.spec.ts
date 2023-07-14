import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicolexpressinstPage } from './bicolexpressinst.page';

describe('BicolexpressinstPage', () => {
  let component: BicolexpressinstPage;
  let fixture: ComponentFixture<BicolexpressinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BicolexpressinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
