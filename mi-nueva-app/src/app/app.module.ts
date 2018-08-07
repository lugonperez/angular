import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactosService } from './contactos.service';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
