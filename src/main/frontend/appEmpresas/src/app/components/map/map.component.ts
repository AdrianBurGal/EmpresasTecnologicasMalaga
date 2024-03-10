import {Component, inject, Input, OnInit} from '@angular/core';
import {Empresa} from "../../model/Empresa";
import {MapService} from "../../service/map.service";

@Component({
    selector: 'app-map',
    standalone: true,
    imports: [],
    template: `
        <div id="map"></div>
    `,
    styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
    @Input() empresa!: Empresa;

    mapService = inject(MapService);

    ngOnInit(): void {
        this.showLocation();
    }

    showLocation() {
        this.mapService.showLocation(this.empresa.latitud, this.empresa.longitud);
    }
}
