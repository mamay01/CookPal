import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SopasingredPage } from './sopasingred.page';

describe('SopasingredPage', () => {
  let component: SopasingredPage;
  let fixture: ComponentFixture<SopasingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SopasingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
