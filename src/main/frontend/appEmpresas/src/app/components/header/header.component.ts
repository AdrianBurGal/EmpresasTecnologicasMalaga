import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header id="main-header">

      <div id="logo-header">
        <span class="site-name">AdrianBG</span>
        <span class="site-desc">Empresas Tecnológicas Málaga</span>
      </div>

      <nav>
        <ul>
          <li><a href="/enterprises">Home</a></li>
          <li><a href="/tableEnterprise">Empresas</a></li>
        </ul>
      </nav>

    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
