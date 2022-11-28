import { Component } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';

  //View Child
  //@ViewChild('nombreRef')  nombreRef: ElementRef;
  //@ViewChild('apellidoRef')  apellidoRef: ElementRef;

  constructor(private logginService:LoggingService,
    private personasService:PersonasService) {
      this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: "+ indice)
    )
    
    }

  //TWO BIND BINDING
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput)
    //this.logginService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido)    
    //this.personas.push(persona1);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

  //Referencias Locales
    //agregarPersona(nombreRef: HTMLInputElement, apellidoRef: HTMLInputElement){
      //let persona1 = new Persona(nombreRef.value, apellidoRef.value)
      ////this.personas.push(persona1);
      //this.personaCreada.emit(persona1);
  //}
    
  //View Child
    //agregarPersona(){
      //let persona1 = new Persona(this.nombreRef.nativeElement, this.apellidoRef.nativeElement)
      ////this.personas.push(persona1);
      //(this.personaCreada.emit(persona1);
  //}
}
