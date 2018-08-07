import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service'; 
import { Contacto } from './contacto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    nombres: Contacto[];

    // Para hacer la inyeccion de dependencias de un servicio
    // debemos hacerlo en el constructor de la clase. Anotamos
    // un parametro con el tipo de servicio a inyectar y 
    // añadimos wel modificador de acceso correspondiente al parametro.
    constructor(private _contactosService: ContactosService){
        console.log("Componente instanciado y servicio inyectado!!!");
    }

    ngOnInit(): void{
      console.log("Estoy en el Hook OnInit!!");
      this.nombres = this._contactosService.obtenerContactos();
    }
  
    eliminarContacto(nombre: Contacto): void {
      this._contactosService.eliminarContacto(nombre);
      this.nombres = this._contactosService.obtenerContactos();
    }

}
