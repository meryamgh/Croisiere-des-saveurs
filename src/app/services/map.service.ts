import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: any;

  constructor() { }

  initMap(): void {
    this.map = L.map('map', {
      center: [20, 0], // Centre de la carte
      zoom: 2, // Niveau de zoom
      minZoom: 1,
      maxZoom: 18,
    });

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    });

    tiles.addTo(this.map);

    const countries = [
      { name: 'France', coordinates: [46.2276, 2.2137] },
      { name: 'États-Unis', coordinates: [37.0902, -95.7129] },
      { name: 'Algérie', coordinates: [28.0339, 1.6596] },
      { name: 'Chine', coordinates: [35.8617, 104.1954] },
      { name: 'Côte d\'Ivoire', coordinates: [7.5400, -5.5471] }
    ];

    countries.forEach(country => {
      const [lat, lng] = country.coordinates;
      L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup(country.name);
    });
  }
}
