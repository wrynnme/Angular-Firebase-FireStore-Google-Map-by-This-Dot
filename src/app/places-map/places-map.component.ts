import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place.module';

@Component({
	selector: 'app-places-map',
	templateUrl: './places-map.component.html',
	styleUrls: ['./places-map.component.scss'],
})
export class PlacesMapComponent implements OnInit {
	@Input() places: Place[];

	lat = 15.87;
	long = 100.9925;

	constructor() {}

	ngOnInit(): void {}
}
