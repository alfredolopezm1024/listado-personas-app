import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticationComponent } from './autentication.component';

const routes: Routes = [{ path: '', component: AutenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticationRoutingModule { }
