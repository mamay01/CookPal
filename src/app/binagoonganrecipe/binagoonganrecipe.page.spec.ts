import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinagoonganrecipePage } from './binagoonganrecipe.page';

describe('BinagoonganrecipePage', () => {
  let component: BinagoonganrecipePage;
  let fixture: ComponentFixture<BinagoonganrecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BinagoonganrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
