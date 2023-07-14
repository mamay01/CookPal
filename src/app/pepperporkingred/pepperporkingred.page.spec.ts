import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepperporkingredPage } from './pepperporkingred.page';

describe('PepperporkingredPage', () => {
  let component: PepperporkingredPage;
  let fixture: ComponentFixture<PepperporkingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PepperporkingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
