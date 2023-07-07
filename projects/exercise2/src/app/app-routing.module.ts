import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecureGuard } from './secure/secure.guard';

const routes: Routes = [
  // creacion de las rutas con el lazy loadind
  {
    path: 'lazy',
    //en cada ruta importa el modulo correspondiente
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then((m) => m.SecureModule),
    //añadido el guard para que sea imposible acceder a la ruta
    canActivate: [SecureGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
