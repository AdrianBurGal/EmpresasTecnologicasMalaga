import {Component, inject, OnInit} from '@angular/core';
import {Empresa} from "../../../model/Empresa";
import {EmpresaService} from "../../../service/empresa.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {EmpresaComponent} from "../empresa/empresa.component";

@Component({
  selector: 'app-listAll',
  standalone: true,
  imports: [NgForOf, RouterLink, EmpresaComponent],
  template: `
      <section class="results">
          <app-empresa *ngFor="let empresa of enterprises"
                       [empresa]="empresa" class="enterprise">
          </app-empresa>
      </section>
  `,
  styleUrl: './listAll.component.css'
})
export class ListAllComponent implements OnInit {

  enterprises: Empresa[] = [];
  enterpriseService = inject(EmpresaService);

  ngOnInit(): void {
    this.enterpriseService.getAll().subscribe((data: Empresa[]) => {
      this.enterprises = data;
      console.log(this.enterprises);
    })
  }

}
