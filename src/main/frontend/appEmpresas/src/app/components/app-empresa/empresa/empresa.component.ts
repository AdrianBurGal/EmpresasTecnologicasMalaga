import {Component, inject, Input, OnInit} from '@angular/core';
import {Empresa} from "../../../model/Empresa";
import {EmpresaService} from "../../../service/empresa.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [NgForOf, RouterLink],
  template: `
      <section class="containerEnterprise">
          <img class="photo" [src]="empresa.foto">
          <h2 class="heading">{{ empresa.nombre }}</h2>
          <p class="location">{{ empresa.localizacion }}</p>
          <a routerLink='/enterprises/enterprise/{{ empresa.idEmpresa }}'>Learn More</a>
      </section>
  `,
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent {
  @Input() empresa!: Empresa;
}
