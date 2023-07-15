import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KinamatisangmanokPage } from './kinamatisangmanok.page';

describe('KinamatisangmanokPage', () => {
  let component: KinamatisangmanokPage;
  let fixture: ComponentFixture<KinamatisangmanokPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KinamatisangmanokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
