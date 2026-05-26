import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntados',
  imports: [CommonModule],
  templateUrl: './preguntados.html',
  styleUrl: './preguntados.css'
})
export class Preguntados {
bloqueado = false;
preguntas = [
  {
    pregunta: 'Que club argentino es conocido como El Millonario?',
    opciones: ['Boca Juniors', 'River Plate', 'Racing Club', 'Independiente'],
    correcta: 1
  },

  {
    pregunta: 'Que clasico juegan Boca Juniors y River Plate?',
    opciones: ['Clasico de Avellaneda', 'Clasico Rosarino', 'Superclasico', 'Clasico Platense'],
    correcta: 2
  },

  {
    pregunta: 'Que club juega de local en el estadio Presidente Peron?',
    opciones: ['Racing Club', 'Independiente', 'San Lorenzo', 'Huracan'],
    correcta: 0
  },

  {
    pregunta: 'Que equipo es conocido como El Rojo?',
    opciones: ['Argentinos Juniors', 'Independiente', 'Estudiantes', 'Newells'],
    correcta: 1
  },

  {
    pregunta: 'Que clasico juegan Newells y Rosario Central?',
    opciones: ['Clasico Rosarino', 'Clasico Santafesino', 'Clasico Cordobes', 'Clasico del Oeste'],
    correcta: 0
  },

  {
    pregunta: 'Que club argentino tiene como apodo El Ciclon?',
    opciones: ['Huracan', 'San Lorenzo', 'Velez', 'Lanus'],
    correcta: 1
  },

  {
    pregunta: 'Que club es conocido como El Pincha?',
    opciones: ['Gimnasia LP', 'Estudiantes LP', 'Colon', 'Union'],
    correcta: 1
  },

  {
    pregunta: 'Que clasico juegan Racing e Independiente?',
    opciones: ['Clasico Porteno', 'Clasico de Avellaneda', 'Clasico del Sur', 'Clasico Nacional'],
    correcta: 1
  },

  {
    pregunta: 'Que club argentino es conocido como El Fortin?',
    opciones: ['Velez Sarsfield', 'Banfield', 'Tigre', 'Arsenal'],
    correcta: 0
  },

  {
    pregunta: 'Que equipo es conocido como El Globo?',
    opciones: ['San Lorenzo', 'Huracan', 'Platense', 'Chacarita'],
    correcta: 1
  }
];

  indicePregunta = 0;
  puntaje = 0;
  finalizado = false;
  mensaje = '';


responder(indiceOpcion: number) {

  if (this.finalizado || this.bloqueado) return;

  this.bloqueado = true;

  if (indiceOpcion === this.preguntas[this.indicePregunta].correcta) {

    this.puntaje += 10;
    this.mensaje = 'Correcto';

  } else {

    this.mensaje = 'Incorrecto';

  }

  setTimeout(() => {

    this.siguientePregunta();

    this.bloqueado = false;

  }, 1000);

}

siguientePregunta() {

  this.mensaje = '';

  if (this.indicePregunta < this.preguntas.length - 1) {

    this.indicePregunta++;

  } else {

    this.finalizado = true;

  }


  this.mensaje = '';
}

  reiniciar() {
    this.indicePregunta = 0;
    this.puntaje = 0;
    this.finalizado = false;
    this.mensaje = '';
    this.bloqueado = false;  
  }
}