import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogginGuardian } from './login/loginGuardian.service';
import { ListaComponent } from './pages/clientes/lista/lista.component';


const routes: Routes = [
  { path: '', canActivate:[LogginGuardian],  loadChildren: () => import('./pages/clientes/lista/lista.module')},
  { path: 'lista-clientes', component: ListaComponent, canActivate:[LogginGuardian] },
  { path: 'crear-clientes', canActivate:[LogginGuardian], loadChildren: () => import('./pages/clientes/crear/crear.module').then(m => m.CrearModule) },
  { path: 'login', component: LoginComponent},
  { path: 'autentication-error', loadChildren: () => import('./pages/error/autentication/autentication.module').then(m => m.AutenticationModule) },
  { path: 'general-error', loadChildren: () => import('./pages/error/general/general.module').then(m => m.GeneralModule) },
  { path: 'modificar', loadChildren: () => import('./pages/clientes/modificar/modificar.module').then(m => m.ModificarModule) },
  { path: 'detalles', loadChildren: () => import('./pages/clientes/detalles/detalles.module').then(m => m.DetallesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
