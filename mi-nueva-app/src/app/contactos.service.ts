import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(1,'Manolo','Sanchez'),
    new Contacto(2,'Juan','Garcia'),
    new Contacto(3,'Pepe','Lopez'),
    new Contacto(4,'Adolfo','Mandangas')
  ];

  obtenerContactos(): Contacto[]{
    return this._nombres;
  }

  eliminarContacto(contacto: Contacto): void {
    console.log(contacto.nombre);
    this._nombres = this._nombres.filter(n => n.id !== contacto.id);
  }

}
