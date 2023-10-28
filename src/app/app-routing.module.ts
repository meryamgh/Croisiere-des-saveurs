import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {RecettesComponent} from "./components/recettes/recettes.component";
import {LoginComponent} from "./components/login/login.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {RecetteComponent} from "./components/recette/recette.component";
import {CountryRecipeComponent} from "./components/country-recipe/country-recipe.component";

const routes: Routes = [
    {path: "map", component: MapComponent},
    {path: "recettes", component: RecettesComponent},
    {path: "login", component: LoginComponent},
    {path: "inscription", component: InscriptionComponent},
    {path: "profil", component: ProfilComponent},
    {path: "recette-detail/:nom", component: RecetteComponent},
    {path: "country-recipe/:nom", component:CountryRecipeComponent},
    {path: "**", redirectTo: '/Accueil', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
