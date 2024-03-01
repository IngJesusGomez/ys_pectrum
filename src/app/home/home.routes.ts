import { Routes } from "@angular/router";
import { ApplicationsComponent } from "./applications/applications.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

export const HOME_ROUTES: Routes = [
    { path: '', component: ApplicationsComponent},
    { path: 'perfil', component: ProfileComponent},
    { path: 'ajustes', component: SettingsComponent},
]