import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaService} from "../../../service/empresa.service";
import {Empresa} from "../../../model/Empresa";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-editar-empresa',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  template: `
    <h2>Editar Empresa</h2>

    <form class="empresa-form" (ngSubmit)="guardarCambios()">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" [(ngModel)]="enterprise.nombre" required>
      </div>
      <div class="form-group">
        <label for="localizacion">Localización:</label>
        <input type="text" id="localizacion" name="localizacion" [(ngModel)]="enterprise.localizacion" required>
      </div>
      <div class="form-group">
        <label for="web">Web:</label>
        <input type="text" id="web" name="web" [(ngModel)]="enterprise.web">
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" [(ngModel)]="enterprise.descripcion" required></textarea>
      </div>
      <div class="form-group">
        <label for="foto">Foto:</label>
        <input type="text" id="foto" name="foto" [(ngModel)]="enterprise.foto" required>
      </div>
      <div class="form-group">
        <label for="latitud">Latitud:</label>
        <input type="number" id="latitud" name="latitud" [(ngModel)]="enterprise.latitud" required>
      </div>
      <div class="form-group">
        <label for="longitud">Longitud:</label>
        <input type="number" id="longitud" name="longitud" [(ngModel)]="enterprise.longitud" required>
      </div>
      <button type="submit">Guardar</button>
    </form>

  `,
  styleUrl: './editar-empresa.component.css'
})
export class EditarEmpresaComponent implements OnInit {
  enterpriseID: number | undefined;
  enterprise!: Empresa;

  constructor(private route: ActivatedRoute, private router: Router, private empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.enterpriseID = +params['id'];
      this.getEnterprise(this.enterpriseID);
    });
  }

  getEnterprise(id: number): void {
    this.empresaService.find(id).subscribe(enterprise => {
      this.enterprise = enterprise;
    });
  }

  guardarCambios(): void {
    if (this.enterprise && this.enterpriseID) {
      this.empresaService.update(this.enterpriseID, this.enterprise).subscribe(updatedEnterprise => {
        this.enterprise = updatedEnterprise;
      });
      this.router.navigate(['/tableEnterprise']);
    }
  }
}
