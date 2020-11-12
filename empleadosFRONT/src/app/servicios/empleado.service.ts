import { Empleado } from './../modelos/empleado';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoURL = "http://localhost:8080/empleado/";

  constructor(private http:HttpClient) { }

  listaEmpleadosService():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.empleadoURL +"listar");
  }
}
