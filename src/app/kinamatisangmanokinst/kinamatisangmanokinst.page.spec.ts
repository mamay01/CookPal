import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KinamatisangmanokinstPage } from './kinamatisangmanokinst.page';

describe('KinamatisangmanokinstPage', () => {
  let component: KinamatisangmanokinstPage;
  let fixture: ComponentFixture<KinamatisangmanokinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KinamatisangmanokinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
