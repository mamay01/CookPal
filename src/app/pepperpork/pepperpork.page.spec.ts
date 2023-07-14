import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepperporkPage } from './pepperpork.page';

describe('PepperporkPage', () => {
  let component: PepperporkPage;
  let fixture: ComponentFixture<PepperporkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PepperporkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
