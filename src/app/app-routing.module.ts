import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';

//componentes

import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [

  {path:'listMacotas', component: ListadoMascotaComponent },
  {path:'', redirectTo:'listMascotas', pathMatch: 'full' },
  {path:'agregarMascota', component: AgregarEditarMascotaComponent },
  { path:'verMascota/:id', component: VerMascotaComponent },
  { path:'editarMascota/:id', component: AgregarEditarMascotaComponent  },
  {path:'**', component: ListadoMascotaComponent },
              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
