import {AfterViewInit, Component, Inject, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NewEmployeeDailogComponent} from "./new-employee-dailog/new-employee-dailog.component";

export interface PeriodicElement {
  position: number;
  Date: string;
  description: string;
  priority: string;
}

@Component({
  selector: 'app-model-material',
  templateUrl: './model-material.component.html',
  styleUrls: ['./model-material.component.css']
})
export class ModelMaterialComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {

  }
  displayedColumns: string[] = ['position', 'Date', 'description', 'priority','action'];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  switch_flag = true;

  @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(JSON.parse(localStorage.getItem('data') || '{}'));
    this.ELEMENT_DATA = JSON.parse(localStorage.getItem('data') || '[]');
    this.dataSource.paginator = this.paginator;
  }

  openAddDialog(): void {
      const dialogRef = this.dialog.open(NewEmployeeDailogComponent, {
      width: '500px',
      data: [{}, 'Add New Task:']
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) {
        return;
      }
      result.position = this.ELEMENT_DATA.length + 1;
      this.ELEMENT_DATA.push(result);
      this.updateTable();
    });
  }

  choise_array_and_sort(){
    var arr: any = [];
    if(this.switch_flag){
      arr = this.sort_data_by_prio(["High","Medium","Low"]);
    }
    else{
      arr = this.sort_data_by_prio(["Low","Medium","High"]);
    }
    this.switch_flag = !this.switch_flag;
    this.sort_data_by_prio(arr);
  }

  sort_data_by_prio(_arr: any) {
    var priorityArray = _arr;
    this.ELEMENT_DATA.sort(function (a, b) {
      var firstPrio = priorityArray.indexOf(a.priority);
      var secPrio = priorityArray.indexOf(b.priority)
      return firstPrio - secPrio
    });
    this.updateTable();
    this.update_indexs()
  }



  openUpdateDialog(data: any): void {
    const dialogRef = this.dialog.open(NewEmployeeDailogComponent, {
      width: '500px',
      data: [{
        Date: data.Date, description: data.description, priority: data.priority, position: data.position
      }, 'Edit Task:']
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) {
        return;
      }

      this.ELEMENT_DATA[data.position - 1] = result;
      this.updateTable();
    });
  }
  deleteRow(data: any) {
    this.ELEMENT_DATA.splice(data.position-1, 1);
    this.update_indexs();
    this.updateTable();
  }
  updateTable(){
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    localStorage.setItem('data', JSON.stringify(this.ELEMENT_DATA));
    this.dataSource.paginator = this.paginator;
  }

  update_indexs() {
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      this.ELEMENT_DATA[i].position = i + 1;
    }
  }
}
