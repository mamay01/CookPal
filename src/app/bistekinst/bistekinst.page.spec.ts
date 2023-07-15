import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BistekinstPage } from './bistekinst.page';

describe('BistekinstPage', () => {
  let component: BistekinstPage;
  let fixture: ComponentFixture<BistekinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BistekinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
