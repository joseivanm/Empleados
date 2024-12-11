import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.serices";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient, private loginService:LoginService){

    }

    cargarEmpleados(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-764e3-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }
    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-764e3-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(
            response => console.log("Se ha guardado los empleados:" + response),
            error => console.log("Error:" + error),
        );
    }

    actualizarEmpleados(indice:number, empleado:Empleado){

        let url = 'https://mis-clientes-764e3-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice + '.json';

  
            this.httpClient.put(url,empleado).subscribe(
                response => console.log("Se ha modificado los empleados:" + response),
                error => console.log("Error:" + error),
            );
        

    }

    eliminarEmpleado(indice:number){

        let url = 'https://mis-clientes-764e3-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice + '.json';

  
            this.httpClient.delete(url).subscribe(
                response => console.log("Se ha eliminado los empleados:" + response),
                error => console.log("Error:" + error),
            );
        

    }

}