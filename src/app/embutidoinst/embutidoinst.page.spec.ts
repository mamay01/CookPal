import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmbutidoinstPage } from './embutidoinst.page';

describe('EmbutidoinstPage', () => {
  let component: EmbutidoinstPage;
  let fixture: ComponentFixture<EmbutidoinstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmbutidoinstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
