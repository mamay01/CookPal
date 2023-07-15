import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickcurryinstPage } from './chickcurryinst.page';

describe('ChickcurryinstPage', () => {
  let component: ChickcurryinstPage;
  let fixture: ComponentFixture<ChickcurryinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickcurryinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
