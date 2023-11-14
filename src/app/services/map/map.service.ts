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
    private animatedCircles: L.Circle[] = [];

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
        this.animationsMap();

    }

    public animationsMap(){

      const c1=  L.circle([0,0], { // Spread operator to convert to LatLngTuple
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.5,
          radius: 100000,  // Example radius, adjust as needed
        }).addTo(this.map);

      const c2=  L.circle([0,30], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      const c3=   L.circle([0,-30], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      const c4=  L.circle([30,0], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      const c5=   L.circle([-30,0], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      const c6=  L.circle([60,0], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      const c7=   L.circle([-60,0], { // Spread operator to convert to LatLngTuple
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 100000,  // Example radius, adjust as needed
      }).addTo(this.map);

      this.animatedCircles.push(c1);
      this.animatedCircles.push(c2);
      this.animatedCircles.push(c3);
      this.animatedCircles.push(c4);
      this.animatedCircles.push(c5);
      this.animatedCircles.push(c6);

      setInterval(() => {
        this.animatedCircles.forEach((circle) => {
          const currentRadius = circle.getRadius();
          const newRadius = this.getRandomRadius();
          circle.setRadius(newRadius);
        });
      }, 1000); // Update every second, adjust as needed
    }

  private getRandomRadius(): number {
    const minRadius = 50000;
    const maxRadius = 100000;
    return Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
  }

}
