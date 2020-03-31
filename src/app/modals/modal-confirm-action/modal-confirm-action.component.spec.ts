import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmActionComponent } from './modal-confirm-action.component';

describe('ModalConfirmActionComponent', () => {
  let component: ModalConfirmActionComponent;
  let fixture: ComponentFixture<ModalConfirmActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
