import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinolaingredPage } from './tinolaingred.page';

describe('TinolaingredPage', () => {
  let component: TinolaingredPage;
  let fixture: ComponentFixture<TinolaingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TinolaingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
