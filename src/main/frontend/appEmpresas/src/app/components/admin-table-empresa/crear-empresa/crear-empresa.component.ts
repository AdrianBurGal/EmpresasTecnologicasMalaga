import {Component} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-empresa',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <h2>Crear Empresa</h2>

    <form class="empresa-form" [formGroup]="form" (ngSubmit)="crearEmpresa()">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" formControlName="nombre" required>
      </div>
      <div class="form-group">
        <label for="localizacion">Localización:</label>
        <input type="text" id="localizacion" name="localizacion" formControlName="localizacion" required>
      </div>
      <div class="form-group">
        <label for="web">Web:</label>
        <input type="text" id="web" name="web" formControlName="web">
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" formControlName="descripcion" required></textarea>
      </div>
      <div class="form-group">
        <label for="foto">Foto:</label>
        <input type="text" id="foto" name="foto" formControlName="foto" required>
      </div>
      <div class="form-group">
        <label for="latitud">Latitud:</label>
        <input type="number" id="latitud" name="latitud" formControlName="latitud" required>
      </div>
      <div class="form-group">
        <label for="longitud">Longitud:</label>
        <input type="number" id="longitud" name="longitud" formControlName="longitud" required>
      </div>
      <button type="submit">Guardar</button>
    </form>
  `,
  styleUrl: './crear-empresa.component.css'
})
export class CrearEmpresaComponent {

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    localizacion: new FormControl(''),
    web: new FormControl(''),
    descripcion: new FormControl(''),
    foto: new FormControl(''),
    longitud: new FormControl(''),
    latitud: new FormControl('')
  });

  constructor(private empresaService: EmpresaService, private router: Router) {
  }

  crearEmpresa(): void {
    this.empresaService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/tableEnterprise']);
    });
  }
}
