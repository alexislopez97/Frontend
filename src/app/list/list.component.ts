import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../service/autos.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;
  page = 1;
  pageSize  = 10;
  marca = "";

  closeResult = '';
  constructor(private modalService: NgbModal, private autoService: AutosService) {}

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;  
    });
  }

  onSelect(modal,auto: Automovil){
    console.log("Hola");
    this.modalService.open(modal);
    this.autoSeleccionado = auto;
  }

}
