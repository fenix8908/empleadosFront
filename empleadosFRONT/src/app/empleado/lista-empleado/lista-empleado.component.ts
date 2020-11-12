import { EmpleadoService } from './../../servicios/empleado.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/modelos/empleado';


@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  empleados:Empleado[] = [];
  p: number = 1;
  constructor(private empleadoService:EmpleadoService,toastService:ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados()
  }

  obtenerEmpleados(){
    this.empleadoService.listaEmpleadosService().subscribe(
      respuesta =>{
        this.empleados = respuesta;
      }
    )
  }

}
