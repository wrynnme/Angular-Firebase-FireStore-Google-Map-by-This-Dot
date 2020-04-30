import { PlacesService } from './../places.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-places-form',
	templateUrl: './places-form.component.html',
	styleUrls: ['./places-form.component.scss'],
})
export class PlacesFormComponent implements OnInit {
	form = new FormGroup({
		name: new FormControl(''),
		long: new FormControl(''),
		lat: new FormControl(''),
	});
	constructor(private placesService: PlacesService) {}

	ngOnInit(): void {}
	onSubmit() {
		const place = this.form.value;
		this.placesService.addPlace({ ...place, visited: false });
		this.form.reset();
	}
}
