import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListHospitalesComponent } from './components/admin/list-hospitales/list-hospitales.component';
import { ListDoctoresComponent } from './components/admin/list-doctores/list-doctores.component';
import { ListEspecialidadesComponent } from './components/admin/list-especialidades/list-especialidades.component';
import { ListPacientesComponent } from './components/admin/list-pacientes/list-pacientes.component';
import { ListHistoriasComponent } from './components/admin/list-historias/list-historias.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  { path: 'admin/hospitales', component: ListHospitalesComponent },
  { path: 'admin/especialidades', component: ListEspecialidadesComponent},
  { path: 'admin/doctores', component: ListDoctoresComponent },
  { path: 'admin/pacientes', component: ListPacientesComponent },
  { path: 'admin/historias', component: ListHistoriasComponent },
  { path: 'user/login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
