import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShanghaiingredPage } from './shanghaiingred.page';

describe('ShanghaiingredPage', () => {
  let component: ShanghaiingredPage;
  let fixture: ComponentFixture<ShanghaiingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShanghaiingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
