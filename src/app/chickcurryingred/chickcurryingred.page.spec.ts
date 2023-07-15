import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickcurryingredPage } from './chickcurryingred.page';

describe('ChickcurryingredPage', () => {
  let component: ChickcurryingredPage;
  let fixture: ComponentFixture<ChickcurryingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickcurryingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
