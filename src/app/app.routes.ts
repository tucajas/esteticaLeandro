import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    //con este path indico la pagina de inicio de la app 
    { path:'', pathMatch:'full', redirectTo:'inicio'},
    { path:'clientes', loadComponent:()=>import('./clientes/home/home.component').then (c =>c.HomeComponent)},
    { path:'insumos', loadComponent: ()=>import('./insumos/home/home.component')},
    { path:'inicio', loadComponent: ()=> import('./pages/inicio/inicio.component')}
];
