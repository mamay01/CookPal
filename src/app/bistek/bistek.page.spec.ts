import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BistekPage } from './bistek.page';

describe('BistekPage', () => {
  let component: BistekPage;
  let fixture: ComponentFixture<BistekPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BistekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
