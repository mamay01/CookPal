import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShanghaiPage } from './shanghai.page';

describe('ShanghaiPage', () => {
  let component: ShanghaiPage;
  let fixture: ComponentFixture<ShanghaiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShanghaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
