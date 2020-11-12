import { NavbarComponent } from './nav/navbar/navbar.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'lista',component:ListaEmpleadoComponent},
  {path:'crear',component:CrearEmpleadoComponent},
  {path:'editar/:id',component:EditarEmpleadoComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
