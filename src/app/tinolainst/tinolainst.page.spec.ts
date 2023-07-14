import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinolainstPage } from './tinolainst.page';

describe('TinolainstPage', () => {
  let component: TinolainstPage;
  let fixture: ComponentFixture<TinolainstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TinolainstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
