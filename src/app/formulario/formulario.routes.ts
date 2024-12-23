import { Routes } from "@angular/router";

export default[

    {
        path: 'ejemplo1',
        loadComponent: ()=>import('./ejemplo1/ejemplo1.component')
    },
    {
        path: 'zodiaco',
        loadComponent: ()=>import('./Zodiaco/zodiaco.component')
    },
    {
      path: 'registro-empleados',
      loadComponent: ()=>import('./registro-empleados/registro-empleados.component')
    }

] as Routes
