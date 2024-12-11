import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {
  title = 'Listado Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService,private router:Router){
    this.empleados = this.empleadosService.empleados;
}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

empleados:Empleado[]=[];

  volverHome(){
    this.router.navigate([''])
  }
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensage("Nombre del empleado:" + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  
  }
  cuadroNombre:string= "";
  cuadroApellido:string= "";
  cuadroCargo:string= "";
  cuadroSalario:number= 0;

}
