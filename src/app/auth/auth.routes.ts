import { Routes } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AUTH_ROUTES: Routes = [
    {path: 'acceso', component: LoginComponent},
    {path: 'registrar', component: RegisterComponent}
]