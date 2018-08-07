import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();

  // Con el decorador '@Input' exponemos un atributo
  // para que un componente pader pueda enlazar datos al hijo.
  @Input() contactos: Contacto[];

   notificarEliminacionContacto(contacto: Contacto): void {
    this.botonEliminarPulsado.emit(contacto);
  }
}
