import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  @Output() botonEliminarPulsado = new EventEmitter<string>();

  // Con el decorador '@Input' exponemos un atributo
  // para que un componente pader pueda enlazar datos al hijo.
  @Input() contactos: string[];

   notificarEliminacionContacto(contacto: string): void {
    this.botonEliminarPulsado.emit(contacto);
  }
}
