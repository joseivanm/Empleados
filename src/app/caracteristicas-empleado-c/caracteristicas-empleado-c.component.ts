import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

@Output() carasteristicasEmpleados =  new EventEmitter<string>();

constructor(private miServicio:ServicioEmpleadosService){
 
}

agregaCarasteristicas(value:string){

  //this.miServicio.muestraMensage(value);
  this.carasteristicasEmpleados.emit(value);

}
}
