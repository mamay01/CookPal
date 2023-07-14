import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KarekarePage } from './karekare.page';

describe('KarekarePage', () => {
  let component: KarekarePage;
  let fixture: ComponentFixture<KarekarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KarekarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
