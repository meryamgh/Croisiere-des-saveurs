import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class MapService {
    private map!: any;

    public constructor(private router: Router) {
    }


    public initMap(): void {
        this.map = L.map('map', {
            center: [35.0, 18.0],
            zoom: 2,
            maxBounds: [
                [-90, -180], // Southwest corner (bottom-left)
                [90, 180]    // Northeast corner (top-right)
            ],
            minZoom: 2,
            maxZoom: 18,
        });

        const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            noWrap: true,
            maxZoom: 20
        });

        tiles.addTo(this.map);
        const countries = [
            {name: 'France', coordinates: [46.2276, 2.2137], flagUrl: 'assets/flags/france.png'},
            {name: 'États-Unis', coordinates: [37.0902, -95.7129], flagUrl: 'assets/flags/us.png'},
            {name: 'Algérie', coordinates: [28.0339, 1.6596], flagUrl: 'assets/flags/Algérie.png'},
            {name: 'Chine', coordinates: [35.8617, 104.1954], flagUrl: 'assets/flags/chine.png'},
            {name: 'Côte d\'Ivoire', coordinates: [7.5400, -5.5471], flagUrl: 'assets/flags/cote-d-ivoire.png'}
        ];

        countries.forEach(country => {
            const [lat, lng] = country.coordinates;
            const icon = L.icon({
                iconUrl: country.flagUrl,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });

            const marker = L.marker([lat, lng], {icon: icon})
                .addTo(this.map)
                .bindPopup(country.name);

            marker.on('click', () => {
                this.router.navigate(['/country-recipe/', country.name]);
            });
        });

    }
}
