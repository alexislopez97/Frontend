import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../service/autos.service';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modals/modal-confirm-action/modal-confirm-action.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[];
  page = 1;
  pageSize  = 10;
  constructor(private modalService: NgbModal, private autoService: AutosService){ }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;  
    });
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAuto(auto).subscribe(response => console.log(response));
      }
    );
  }

  openModalConfirmEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true})
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.delateAuto(autoTemp).subscribe(response => {
          console.log("Se ha eliminado correctamente el auto");
          console.log(response);
        })
      },
      (reason) => {
        console.log(reason);
      }
    )
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = this.autos;
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.addAuto(auto).subscribe(response => console.log(response));
      }
    );
  }
}
