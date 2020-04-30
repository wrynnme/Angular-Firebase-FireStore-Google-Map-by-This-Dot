import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External Modules
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';

// App Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesMapComponent } from './places-map/places-map.component';

import { environment } from './../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		PlacesFormComponent,
		PlacesListComponent,
		PlacesMapComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCX2GDp7OW-B_-R_MMofle_IfGg4nPOJXE',
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
