import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BangusingredPage } from './bangusingred.page';

describe('BangusingredPage', () => {
  let component: BangusingredPage;
  let fixture: ComponentFixture<BangusingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BangusingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
