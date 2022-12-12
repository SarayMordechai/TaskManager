import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NewEmployeeDailogComponent } from './model/model-material/new-employee-dailog/new-employee-dailog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSortModule} from "@angular/material/sort";
import { HomePageComponent } from './home-page/home-page.component';
import { ModelBootstrapComponent } from './model/model-bootstrap/model-bootstrap.component';
import { ModelMaterialComponent } from './model/model-material/model-material.component';
import { NewEmployeeBootstrapComponent } from './model/model-bootstrap/new-employee-bootstrap/new-employee-bootstrap.component';
import {NgbDatepickerModule, NgbInputDatepicker, NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {BsModalService} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeDailogComponent,
    HomePageComponent,
    ModelMaterialComponent,
    NewEmployeeBootstrapComponent,
    ModelBootstrapComponent
  ],
    imports: [
        NgbDatepickerModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSortModule,
        NgbInputDatepicker,
        NgbPagination
    ],
  providers: [BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
