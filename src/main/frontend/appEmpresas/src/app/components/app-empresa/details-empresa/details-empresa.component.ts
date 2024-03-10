import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmpresaService} from "../../../service/empresa.service";
import {Empresa} from "../../../model/Empresa";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {MapComponent} from "../../map/map.component";

@Component({
  selector: 'app-details-empresa',
  standalone: true,
    imports: [AsyncPipe, NgIf, MapComponent],
  template: `

      <article *ngIf="empresa | async as empresa" class="containerEnterprise">
          <img class="photo" src="{{empresa.foto}}"
               alt="Exterior photo of {{empresa.nombre}}"/>
          <section class="description">
              <h2 class="heading">{{empresa.nombre}}</h2>
              <p class="location">{{empresa.localizacion}}</p>
              <p class="description">{{empresa.descripcion}}</p>
              <app-map [empresa]="empresa"></app-map>
          </section>
      </article>
  `,
  styleUrl: './details-empresa.component.css'
})
export class DetailsEmpresaComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  empresaService = inject(EmpresaService);
  empresa: Observable<Empresa | undefined>;

  constructor() {
    const idEmpresa = Number(this.route.snapshot.params['idEmpresa']);
    this.empresa = this.empresaService.find(idEmpresa);
    console.log(this.empresa)
  }

}
