import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import { AUTOMOVILES } from '../data';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;
  marca = "";

  closeResult = '';
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onSelect(modal,auto: Automovil){
    console.log("Hola");
    this.modalService.open(modal);
    this.autoSeleccionado = auto;
  }

}
