import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    nombres: string[] = [
      "Manolo",
      "Juan",
      "Mandanga",
      "Almu"
    ];

    ngOnInit(): void{
    }
  
    eliminarContacto(nombre: string): void {
      console.log(nombre);
      this.nombres = this.nombres.filter(n => n !== nombre);
    }

}
