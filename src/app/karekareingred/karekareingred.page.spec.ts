import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KarekareingredPage } from './karekareingred.page';

describe('KarekareingredPage', () => {
  let component: KarekareingredPage;
  let fixture: ComponentFixture<KarekareingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KarekareingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
