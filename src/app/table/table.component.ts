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
  page : number;
  pageSize : number;
  displayProgressBar: boolean;
  constructor(private modalService: NgbModal, private autoService: AutosService){ }

  ngOnInit() {
    this.displayProgressBar = true;
    this.pageSize = 10;
    this.page = +sessionStorage.getItem('currentPage');
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;  
      }, 1000);
    });
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAuto(auto).subscribe(response => {
          console.log(response);
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
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
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
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
        this.autoService.addAuto(auto).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
