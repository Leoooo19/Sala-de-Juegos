import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mayor-menor',
  imports: [CommonModule],
  templateUrl: './mayor-menor.html',
  styleUrl: './mayor-menor.css'
})
export class MayorMenor {

  palos = ['♠', '♥', '♦', '♣'];

  cartaActual = this.generarCarta();
  cartaSiguiente: any = null;

  puntos = 0;
  incorrectas = 0;
  racha = 0;
  cartasJugadas = 0;

  mensaje = 'Elegí Mayor o Menor para comenzar';
  juegoTerminado = false;

  generarCarta() {
    return {
      numero: Math.floor(Math.random() * 13) + 1,
      palo: this.palos[Math.floor(Math.random() * this.palos.length)]
    };
  }

  elegir(opcion: 'mayor' | 'menor') {
    if (this.juegoTerminado) return;

    this.cartaSiguiente = this.generarCarta();
    this.cartasJugadas++;

    const acierto =
      opcion === 'mayor'
        ? this.cartaSiguiente.numero > this.cartaActual.numero
        : this.cartaSiguiente.numero < this.cartaActual.numero;

    if (acierto) {
      this.puntos++;
      this.racha++;
      this.mensaje = 'Correcto, seguís jugando';
      this.cartaActual = this.cartaSiguiente;
      this.cartaSiguiente = null;
    } else {
      this.incorrectas++;
      this.mensaje = 'Incorrecto, terminó la partida';
      this.juegoTerminado = true;
    }
  }

  reiniciar() {
    this.cartaActual = this.generarCarta();
    this.cartaSiguiente = null;
    this.puntos = 0;
    this.incorrectas = 0;
    this.racha = 0;
    this.cartasJugadas = 0;
    this.mensaje = 'Elegí Mayor o Menor para comenzar';
    this.juegoTerminado = false;
  }
}