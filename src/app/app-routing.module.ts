import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelMaterialComponent} from './model/model-material/model-material.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {ModelBootstrapComponent} from "./model/model-bootstrap/model-bootstrap.component";

const routes: Routes = [
  { path: 'HomePage', component: HomePageComponent },
  { path: 'Material', component: ModelMaterialComponent },
  { path: 'Boostrap', component: ModelBootstrapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
