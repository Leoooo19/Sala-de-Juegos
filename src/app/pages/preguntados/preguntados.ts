import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntados',
  imports: [CommonModule],
  templateUrl: './preguntados.html',
  styleUrl: './preguntados.css'
})
export class Preguntados {

  preguntas = [
    {
      pregunta: '¿Que club argentino es conocido como El Millonario?',
      opciones: ['Boca Juniors', 'River Plate', 'Racing Club', 'Independiente'],
      correcta: 'River Plate'
    },
    {
      pregunta: '¿Que clásico juegan Boca Juniors y River Plate?',
      opciones: ['Clasico de Avellaneda', 'Clasico Rosarino', 'Superclásico', 'Clasico Platense'],
      correcta: 'Superclásico'
    },
    {
      pregunta: '¿Que club juega de local en el estadio Presidente Perón?',
      opciones: ['Racing Club', 'Independiente', 'San Lorenzo', 'Huracan'],
      correcta: 'Racing Club'
    },
    {
      pregunta: '¿Que equipo es conocido como El Rojo?',
      opciones: ['Argentinos Juniors', 'Independiente', 'Estudiantes', 'Newell’s'],
      correcta: 'Independiente'
    },
    {
      pregunta: '¿Que clásico juegan Newell’s y Rosario Central?',
      opciones: ['Clásico Rosarino', 'Clásico Santafesino', 'Clásico Cordobés', 'Clásico del Oeste'],
      correcta: 'Clásico Rosarino'
    },
    {
      pregunta: '¿Que club argentino tiene como apodo El Ciclon?',
      opciones: ['Huracán', 'San Lorenzo', 'Vélez', 'Lanus'],
      correcta: 'San Lorenzo'
    },
    {
      pregunta: '¿Que club es conocido como El Pincha?',
      opciones: ['Gimnasia LP', 'Estudiantes LP', 'Colón', 'Unión'],
      correcta: 'Estudiantes LP'
    },
    {
      pregunta: '¿Que clasico juegan Racing e Independiente?',
      opciones: ['Clasico Porteño', 'Clasico de Avellaneda', 'Clasico del Sur', 'Clasico Nacional'],
      correcta: 'Clasico de Avellaneda'
    },
    {
      pregunta: '¿Que club argentino es conocido como El Fortin?',
      opciones: ['Velez Sarsfield', 'Banfield', 'Tigre', 'Arsenal'],
      correcta: 'Velez Sarsfield'
    },
    {
      pregunta: '¿Que equipo es conocido como El Globo?',
      opciones: ['San Lorenzo', 'Huracán', 'Platense', 'Chacarita'],
      correcta: 'Huracan'
    }
  ];

  indicePregunta = 0;
  puntaje = 0;
  finalizado = false;
  mensaje = '';

  responder(opcion: string) {
    if (this.finalizado) return;

    if (opcion === this.preguntas[this.indicePregunta].correcta) {
      this.puntaje += 10;
      this.mensaje = 'Correcto';
    } else {
      this.mensaje = 'Incorrecto';
    }

    setTimeout(() => {
      this.siguientePregunta();
    }, 700);
  }

  siguientePregunta() {
    this.mensaje = '';

    if (this.indicePregunta < this.preguntas.length - 1) {
      this.indicePregunta++;
    } else {
      this.finalizado = true;
    }
  }

  reiniciar() {
    this.indicePregunta = 0;
    this.puntaje = 0;
    this.finalizado = false;
    this.mensaje = '';
  }
}