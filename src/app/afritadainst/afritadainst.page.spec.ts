import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfritadainstPage } from './afritadainst.page';

describe('AfritadainstPage', () => {
  let component: AfritadainstPage;
  let fixture: ComponentFixture<AfritadainstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AfritadainstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
