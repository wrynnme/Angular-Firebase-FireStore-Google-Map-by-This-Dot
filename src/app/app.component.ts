import { PlacesService } from './places.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'This Dot App';

	constructor(private placesService: PlacesService) {}
	places$ = this.placesService.places$;
}
