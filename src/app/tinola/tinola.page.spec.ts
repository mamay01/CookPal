import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinolaPage } from './tinola.page';

describe('TinolaPage', () => {
  let component: TinolaPage;
  let fixture: ComponentFixture<TinolaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TinolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
