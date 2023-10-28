import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from "./components/map/map.component";
import {HttpClientModule} from "@angular/common/http";
import mockServer from './app.mock';
import {UserService} from "./services/user/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecettesComponent} from './components/recettes/recettes.component';
import {LoginComponent} from './components/login/login.component';
import {InscriptionComponent} from './components/inscription/inscription.component';
import {ProfilComponent} from './components/profil/profil.component';
import {RecetteComponent} from './components/recette/recette.component';
import {CustomFilterPipe} from './pipe/custom-filter.pipe';
import { CountryRecipeComponent } from './components/country-recipe/country-recipe.component';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SlideComponent} from "./slide/slide.component";
import {FooterComponent} from "./footer/footer.component";

mockServer();

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        RecettesComponent,
        LoginComponent,
        InscriptionComponent,
        ProfilComponent,
        RecetteComponent,
        CustomFilterPipe,
        HeaderComponent,
        HomeComponent,
        SlideComponent,
        FooterComponent,
        CountryRecipeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
