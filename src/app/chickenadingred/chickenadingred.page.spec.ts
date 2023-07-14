import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChickenadingredPage } from './chickenadingred.page';

describe('ChickenadingredPage', () => {
  let component: ChickenadingredPage;
  let fixture: ComponentFixture<ChickenadingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChickenadingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
