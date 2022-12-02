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
  isValidDate:boolean = true;
  isValidDescription:boolean = true;
  short_date = ""
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
    data[0].priority = "Low";
    this.Date = new Date(data[0].Date).toJSON();
    console.log(this.Date);
    this.checkDateValidation();
    this.checkDescriptionValidation();
  }
  onclick(): void {
    this.dialogRef.close();
  }

  checkDateValidation() {
    if (this.Date != null && this.Date != "") {
      this.isValidDate = false;
    }
    else{
      this.isValidDate = true;
    }
    this.disableOk = this.isValidDate || this.isValidDescription;
  }
  checkDescriptionValidation() {
    //make sure the this.data[0].description is Valid
    if (this.data[0].description != null && this.data[0].description != "") {
      this.isValidDescription = false;
    }
    else{
      this.isValidDescription = true;
    }
    this.disableOk = this.isValidDate || this.isValidDescription;
  }

}
