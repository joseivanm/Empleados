import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()

export class EmpleadosService {

    constructor(private servicioVentaEmergente: ServicioEmpleadosService, private dataService:DataServices) {
        
     }
     setEmpleados(misEmpleados:Empleado[]){
        this.empleados= misEmpleados;
     }

     obtenerEmpleados(){
        return this.dataService.cargarEmpleados();
     }
    /*empleados: Empleado[] = [
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Ana", "Garcia", "Directora", 2500),
        new Empleado("Ivan", "Aznar", "Jefa Seccion", 1500),
        new Empleado("Mario", "Gomez", "miau", 5500),
    ];*/
    empleados: Empleado[] = []

    agregarEmpleadoServicio(empleado: Empleado) {
        this.servicioVentaEmergente.muestraMensage("Persona que se va a agregar:" + "\n" + empleado.nombre + " Salario: " + empleado.salario);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
    }

    actualizaEmpleado(indice:number, empleado:Empleado){
        let empleadoModificiado = this.empleados[indice];
    
        empleadoModificiado.nombre= empleado.nombre;
        empleadoModificiado.apellido = empleado.apellido;
        empleadoModificiado.cargo = empleado.cargo;
        empleadoModificiado.salario = empleado.salario; 
        this.dataService.actualizarEmpleados(indice,empleado);
    }

    eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
        
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados!=null)this.dataService.guardarEmpleados(this.empleados);
    }

}
