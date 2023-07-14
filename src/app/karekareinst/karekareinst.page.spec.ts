import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KarekareinstPage } from './karekareinst.page';

describe('KarekareinstPage', () => {
  let component: KarekareinstPage;
  let fixture: ComponentFixture<KarekareinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KarekareinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
