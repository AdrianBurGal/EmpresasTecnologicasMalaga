import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {EmpresaComponent} from "./components/app-empresa/empresa/empresa.component";
import {DetailsEmpresaComponent} from "./components/app-empresa/details-empresa/details-empresa.component";
import {MapComponent} from "./components/map/map.component";
import {AdminTableEmpresaComponent} from "./components/admin-table-empresa/list-All-empresa/admin-table-empresa.component";
import {EditarEmpresaComponent} from "./components/admin-table-empresa/editar-empresa/editar-empresa.component";
import {CrearEmpresaComponent} from "./components/admin-table-empresa/crear-empresa/crear-empresa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EmpresaComponent, DetailsEmpresaComponent,
    MapComponent, AdminTableEmpresaComponent, EditarEmpresaComponent, CrearEmpresaComponent],
  template: `
      <main>
          <app-header/>
          <section class="content">
              <router-outlet/>
          </section>
      </main>
  `
})
export class AppComponent {
}
