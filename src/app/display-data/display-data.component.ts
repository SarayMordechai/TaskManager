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
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {
  }
  displayedColumns: string[] = ['position', 'Date', 'description', 'priority','action'];
  ELEMENT_DATA: PeriodicElement[] = [
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<PeriodicElement>(JSON.parse(localStorage.getItem('data') || '{}'));
    this.ELEMENT_DATA = JSON.parse(localStorage.getItem('data') || '{}');
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
      let date = new Date(result.Date)
      result.Date = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
      result.position = this.ELEMENT_DATA.length + 1;
      this.ELEMENT_DATA.push(result);
      this.updateTable();
    });
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
      let date = new Date(result.Date)
      result.Date = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
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
