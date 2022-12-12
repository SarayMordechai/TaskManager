import {AfterViewInit, Component, EventEmitter, Inject} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap/modal";


@Component({
  selector: 'app-new-employee-bootstrap',
  templateUrl: './new-employee-bootstrap.component.html',
  styleUrls: ['./new-employee-bootstrap.component.css'],
  providers: [{ provide: BsModalRef, useValue: {} }]

})
export class NewEmployeeBootstrapComponent implements AfterViewInit {
  Date: any = "";
  description: string = "";
  priority: string = "";
  desc: string = "";
  position: number = 0;
  disableOk: boolean = true;
  isValidDate:boolean = true;
  isValidDescription:boolean = true;
  Priorities: string[] = ['Low', 'Medium', 'High'];


  constructor(@Inject(BsModalService) public modal: any) {
    this.priority = "Low";
  }

  ngAfterViewInit() {
    this.checkDateValidation();
    this.checkDescriptionValidation();
  }
  public transferData: EventEmitter<any> = new EventEmitter<any>();
  onclick1(): void {
    console.log(this.Date);
    const new_date = this.Date.day + "/" + this.Date.month + "/" + this.Date.year;
    let obj = {
      Date: new_date,
      description: this.description,
      priority: this.priority
    }
    this.transferData.emit(obj);
    this.modal.hide();
  }
  checkDateValidation() {
    console.log(this.Date);
    this.isValidDate = !(this.Date != null && this.Date != "");
    this.disableOk = this.isValidDate || this.isValidDescription;
  }
  checkDescriptionValidation() {
    //make sure the this.data[0].description is Valid
    this.isValidDescription = !(this.description != null && this.description != "");
    this.disableOk = this.isValidDate || this.isValidDescription;
  }
}
