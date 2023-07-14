import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmbutidoPage } from './embutido.page';

describe('EmbutidoPage', () => {
  let component: EmbutidoPage;
  let fixture: ComponentFixture<EmbutidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmbutidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
