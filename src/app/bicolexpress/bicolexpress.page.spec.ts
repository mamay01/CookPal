import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicolexpressPage } from './bicolexpress.page';

describe('BicolexpressPage', () => {
  let component: BicolexpressPage;
  let fixture: ComponentFixture<BicolexpressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BicolexpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
