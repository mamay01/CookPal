import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepperporkinstPage } from './pepperporkinst.page';

describe('PepperporkinstPage', () => {
  let component: PepperporkinstPage;
  let fixture: ComponentFixture<PepperporkinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PepperporkinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
