import {Routes} from '@angular/router';
import {ListAllComponent} from "./components/app-empresa/listAll-empresa/listAll.component";
import {DetailsEmpresaComponent} from "./components/app-empresa/details-empresa/details-empresa.component";
import {
  AdminTableEmpresaComponent
} from "./components/admin-table-empresa/list-All-empresa/admin-table-empresa.component";
import {EditarEmpresaComponent} from "./components/admin-table-empresa/editar-empresa/editar-empresa.component";
import {CrearEmpresaComponent} from "./components/admin-table-empresa/crear-empresa/crear-empresa.component";

export const routes: Routes = [
  {path: '', component: ListAllComponent, title: 'Enterprises'},
  {path: 'enterprises', component: ListAllComponent, title: 'Enterprises'},
  {path: 'enterprises/enterprise/:idEmpresa', component: DetailsEmpresaComponent, title: 'Details'},
  {path: 'tableEnterprise', component: AdminTableEmpresaComponent, title: 'TableEnterprise'},

  {path: 'enterprises/createEnterprise', component: CrearEmpresaComponent, title: 'TableEditEnterprise'},
  {path: 'enterprises/editEnterprise/:id', component: EditarEmpresaComponent, title: 'TableEditEnterprise'},
  {path: 'enterprises/deleteEnterprise/:id', redirectTo: '/tableEnterprise'}
];
