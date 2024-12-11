import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.serices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private loginervice:LoginService){
     
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCt4peXzjfN91KFnyDd4o0fI0Ae1ArpEPU",
      authDomain: "mis-clientes-764e3.firebaseapp.com",
    })
  }

  estalogeado(){

    return this.loginervice.estaLogueado();
  }

  logout(){
    this.loginervice.logout();
  }
  
}
