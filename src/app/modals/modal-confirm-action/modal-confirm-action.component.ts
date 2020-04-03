import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm-action',
  templateUrl: './modal-confirm-action.component.html',
  styleUrls: ['./modal-confirm-action.component.css']
})
export class ModalConfirmActionComponent implements OnInit {

  
  mensaje: string;

  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
