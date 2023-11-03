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
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";
import {SlideComponent} from "./components/slide/slide.component";
import {FooterComponent} from "./components/footer/footer.component";
import { FavorisComponent } from './components/favoris/favoris.component';
import {NgOptimizedImage} from "@angular/common";
import { CommentaireComponent } from './components/commentaire/commentaire.component';

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
        CountryRecipeComponent,
        FavorisComponent,
        CommentaireComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
