import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {Router} from '@angular/router';
import {CountryService} from "../country/country.service";


@Injectable({
    providedIn: 'root'
})
export class MapService {
    private map!: any;
    private readonly TILE_LAYER_URL: string = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
    private readonly FLAGS_FOLDER: string = 'assets/flags/';


    public constructor(private router: Router, private countryService: CountryService) {
    }


    public setCountries(): void {
        this.countryService.getCountries().subscribe((data) => {
            data.forEach(country => {
                const [lat, lng] = country.coordinates;
                const icon = L.icon({
                    iconUrl: this.FLAGS_FOLDER + country.accronyme + '.png',
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                });

                const marker = L.marker([lat, lng], {icon: icon})
                    .addTo(this.map)
                    .bindPopup(country.name);

                marker.on('click', (): void => {
                    this.router.navigate(['/country-recipe/', country.name]);
                });
            });
        });
    }

    public initMap(): void {
        this.map = L.map('map', {
            center: [35.0, 18.0],
            zoom: 2,
            maxBounds: [
                [-90, -180],
                [90, 180]
            ],
            minZoom: 2,
            maxZoom: 18,
        });

        const tiles = L.tileLayer(this.TILE_LAYER_URL, {
            subdomains: 'abcd',
            maxZoom: 20
        });

        tiles.addTo(this.map);
        this.setCountries();


    }



}
