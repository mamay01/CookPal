import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickcurryPage } from './chickcurry.page';

describe('ChickcurryPage', () => {
  let component: ChickcurryPage;
  let fixture: ComponentFixture<ChickcurryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickcurryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
