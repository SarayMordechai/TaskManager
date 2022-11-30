import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

interface priorities {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-employee-dailog',
  templateUrl: './new-employee-dailog.component.html',
  styleUrls: ['./new-employee-dailog.component.css']
})
export class NewEmployeeDailogComponent {

  Date: string = "";
  description: string = "";
  priority: string = "";
  desc: string = "";
  position: number = 0;
  disableOk: boolean = true;

  Priorities: priorities[] = [
    {value: 'Low', viewValue: 'Low'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'High', viewValue: 'High'},
  ];
  constructor(
    public dialogRef: MatDialogRef<NewEmployeeDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.desc = data[1];


  }
  onclick(): void {
    this.dialogRef.close();
  }

  isDateValid() {

    alert('ggg');
  }
}
