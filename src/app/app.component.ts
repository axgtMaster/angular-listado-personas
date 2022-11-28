import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de personas';
   //personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez'), new Persona('Carla', 'Lara')]
   //personas: Persona[] = [];
   personas: Persona[];

   constructor(private logginService: LoggingService,
              private personasService: PersonasService){

   }
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

   //personaAgregada(persona: Persona){
     //this.logginService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre)
     //this.personas.push(persona);
     //this.personasService.agregarPersona(persona);
   //}
}
