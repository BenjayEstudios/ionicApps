import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationEmailPage } from './confirmation-email.page';

describe('ConfirmationEmailPage', () => {
  let component: ConfirmationEmailPage;
  let fixture: ComponentFixture<ConfirmationEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
