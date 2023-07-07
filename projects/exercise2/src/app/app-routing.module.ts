import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecureGuard } from './secure/secure.guard';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then((m) => m.SecureModule),
    canActivate: [SecureGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
