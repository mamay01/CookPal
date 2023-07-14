import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmbutidoingredPage } from './embutidoingred.page';

describe('EmbutidoingredPage', () => {
  let component: EmbutidoingredPage;
  let fixture: ComponentFixture<EmbutidoingredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmbutidoingredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
