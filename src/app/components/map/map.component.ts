import {Component, AfterViewInit} from '@angular/core';
import {MapService} from "../../services/map/map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  public constructor(private mapService: MapService) {
  }

  public ngAfterViewInit(): void {
    this.mapService.initMap();
  }
}
