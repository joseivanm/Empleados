import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensage(mensaje:string){
    alert(mensaje);
  }
}
