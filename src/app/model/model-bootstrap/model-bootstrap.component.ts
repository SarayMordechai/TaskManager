import {Component, OnInit} from '@angular/core';
import { NewEmployeeBootstrapComponent } from './new-employee-bootstrap/new-employee-bootstrap.component';
import { BsModalService } from 'ngx-bootstrap/modal';


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
  start = 0;
  end = 5;
  constructor(private modalService: BsModalService) {
  }
  switch_flag = true;
  itemsPerPage: any;
  page: any;
  total$: any;
  pages: number[] | undefined ;

  ngOnInit() {
    this.PeriodicElement = JSON.parse(localStorage.getItem('data') || '[]');
    this.pages = Array(Math.ceil(this.PeriodicElement.length / 5)).fill(0).map((x, i) => i + 1);
    this.update_indexs();
  }

  openDialog() {
    const initialState = {};
    let bsModel = this.modalService.show(NewEmployeeBootstrapComponent, { initialState, class: 'centerDialog' });
    // @ts-ignore
    bsModel.content.transferData.subscribe((data) => {
      console.log(data);
      let newElement :PeriodicElement = {
        position: this.PeriodicElement.length + 1,
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
    if (this.PeriodicElement.length % 5 === 0) {
      this.prev();
    }
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
    this.pages = Array(Math.ceil(this.PeriodicElement.length / 5)).fill(0).map((x, i) => i + 1);
    this.update_indexs();

  }
  choise_array_and_sort(){
    var order_type = [["High", "Medium", "Low"], ["Low", "Medium", "High"]];
    if(this.switch_flag){
      this.sort_data_by_prio(order_type[0]);
    }
    else{
      this.sort_data_by_prio(order_type[1]);
    }
    this.switch_flag = !this.switch_flag;
  }

  sort_data_by_prio(_arr: any) {
    var priorityArray = _arr;
    this.PeriodicElement.sort(function (a, b) {
      try {
        var firstPrio = priorityArray.indexOf(a.priority);
        var secPrio = priorityArray.indexOf(b.priority)
        return firstPrio - secPrio
      }
      catch (e) {
        return 0;
      }
    });
    this.updateTable();
  }

  change() {
    this.PeriodicElement = this.PeriodicElement.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  prev() {
    if(this.start > 0){
      this.start -= 5;
      this.end -= 5;
    }
  }

  next() {
    if(this.end < this.PeriodicElement.length) {
      this.start += 5;
      this.end += 5;
    }
  }

  goToPage(page: number) {
    this.start = (page - 1) * 5;
    this.end = page * 5;
  }

  update_indexs() {
    for (let i = 0; i < this.PeriodicElement.length; i++) {
      this.PeriodicElement[i].position = i + 1;
    }
  }
}


