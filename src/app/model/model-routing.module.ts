import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelBootstrapComponent} from './model-bootstrap/model-bootstrap.component'
import {ModelMaterialComponent} from './model-material/model-material.component'
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: 'Bootstrap', component: ModelBootstrapComponent },
  { path: 'Material', component: ModelMaterialComponent},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
