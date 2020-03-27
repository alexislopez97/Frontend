import { Component, OnInit } from '@angular/core';
import {Automovil} from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../service/autos.service';


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

}
