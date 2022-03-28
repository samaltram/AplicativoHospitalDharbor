import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';

//componentes

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListHospitalesComponent } from './components/admin/list-hospitales/list-hospitales.component';
import { ListEspecialidadesComponent } from './components/admin/list-especialidades/list-especialidades.component';
import { ListDoctoresComponent } from './components/admin/list-doctores/list-doctores.component';
import { ListPacientesComponent } from './components/admin/list-pacientes/list-pacientes.component';
import { ListHistoriasComponent } from './components/admin/list-historias/list-historias.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { LoginComponent } from './user/login/login.component';
import { HospitalService } from './services/hospital.service';
import { PacienteService } from './services/paciente.service';
import { DoctorService } from './services/doctor.service';
import { DoctorEspecialidadService } from './services/doctor-especialidad.service';
import { EspecialidadService } from './services/especialidad.service';



// Servicios


//Prime NG





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListHospitalesComponent,
    ListEspecialidadesComponent,
    ListDoctoresComponent,
    ListPacientesComponent,
    ListHistoriasComponent,
    SaludoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  providers: [
    HospitalService,
    PacienteService,
    DoctorService,
    DoctorEspecialidadService,
    EspecialidadService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
