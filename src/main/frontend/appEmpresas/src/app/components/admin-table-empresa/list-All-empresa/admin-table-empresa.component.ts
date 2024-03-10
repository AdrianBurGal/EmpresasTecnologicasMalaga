import {Component, inject} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {filter, Observable, Subscription} from 'rxjs';
import {Empresa} from "../../../model/Empresa";

@Component({
  selector: 'app-admin-table-empresa',
  standalone: true,
  imports: [AsyncPipe, NgForOf, RouterLink],
  template: `
    <div id="encabezado">
      <h2>Listado de Empresas</h2>
      <button routerLink='/enterprises/createEnterprise/'>Crear</button>
    </div>
    <table id="empresasTable">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Localización</th>
        <th>Web</th>
        <th>Descripción</th>
        <th>Foto</th>
        <th>Latitud</th>
        <th>Longitud</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let empresa of enterprises | async">
        <td>{{ empresa.idEmpresa }}</td>
        <td>{{ empresa.nombre }}</td>
        <td>{{ empresa.localizacion }}</td>
        <td>{{ empresa.web }}</td>
        <td>{{ empresa.descripcion }}</td>
        <td>{{ empresa.foto }}</td>
        <td>{{ empresa.latitud }}</td>
        <td>{{ empresa.longitud }}</td>
        <td>
          <button routerLink='/enterprises/editEnterprise/{{ empresa.idEmpresa }}'>Editar</button>
          <button (click)="deleteEnterprise(empresa.idEmpresa)">Eliminar</button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  styleUrl: './admin-table-empresa.component.css'
})
export class AdminTableEmpresaComponent {
  enterprises: Observable<Empresa[]>;

  constructor(private empresaService: EmpresaService) {
    this.enterprises = this.empresaService.getAll();
  }

  deleteEnterprise(id: number): void {
    this.empresaService.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
}
