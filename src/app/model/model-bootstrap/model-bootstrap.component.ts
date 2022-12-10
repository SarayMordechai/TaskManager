import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NewEmployeeBootstrapComponent } from './new-employee-bootstrap/new-employee-bootstrap.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import {MatTableDataSource} from "@angular/material/table";


interface PeriodicElement {
  position: number;
  Date: string;
  description: string;
  priority: string;
}

const Element: PeriodicElement[] = [];

@Component({
  selector: 'app-model-bootstrap',
  templateUrl: './model-bootstrap.component.html',
  styleUrls: ['./model-bootstrap.component.css'],
})

export class ModelBootstrapComponent implements OnInit {
  PeriodicElement = Element;
  pageSize: number = 2;
  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    this.PeriodicElement = JSON.parse(localStorage.getItem('data') || '[]');
    console.log("csd"+this.PeriodicElement);
  }

  openDialog() {
    const initialState = {};
    let bsModel = this.modalService.show(NewEmployeeBootstrapComponent, { initialState, class: 'centerDialog' });
    // @ts-ignore
    bsModel.content.transferData.subscribe((data) => {
      console.log(data);
      //add to Element another using the data
      let newElement :PeriodicElement = {
        position: Element.length + 1,
        Date: data.Date,
        description: data.description,
        priority: data.priority
      }
      this.PeriodicElement.push(newElement);
      this.updateTable();
    });

  }

  deleteRow(element:any) {
    let index = this.PeriodicElement.indexOf(element);
    this.PeriodicElement.splice(index,1);
    this.updateTable();
  }

  openUpdateDialog(element:any) {
    let date = element.Date.split("/");
    console.log(date);
    const initialState = {
      Date: {year: parseInt(date[2]), month: parseInt(date[1]), day: parseInt(date[0])},
      description: element.description,
      priority: element.priority
    };
    let bsModel = this.modalService.show(NewEmployeeBootstrapComponent, { initialState, class: 'centerDialog' });
    // @ts-ignore
    bsModel.content.transferData.subscribe((data) => {
      element.Date = data.Date;
      element.description = data.description;
      element.priority = data.priority;
    });
    this.updateTable();
  }
  updateTable(){
    localStorage.setItem('data', JSON.stringify(this.PeriodicElement));
  }
}


