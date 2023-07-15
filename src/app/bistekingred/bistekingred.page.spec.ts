import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BistekingredPage } from './bistekingred.page';

describe('BistekingredPage', () => {
  let component: BistekingredPage;
  let fixture: ComponentFixture<BistekingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BistekingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
