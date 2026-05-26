import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivina-numero',
  imports: [CommonModule, FormsModule],
  templateUrl: './adivina-numero.html',
  styleUrl: './adivina-numero.css'
})
export class AdivinaNumero {

  numeroSecreto = Math.floor(Math.random() * 20) + 1;
  numeroIngresado: number = 0;
  intentos = 0;
  maxIntentos = 5;
  mensaje = 'Adivina un numero del 1 al 20';
  finalizado = false;

probarNumero() {

  if (this.finalizado) return;

  this.intentos++;

  if (this.numeroIngresado === this.numeroSecreto) {

    this.mensaje = 'Ganaste';
    this.finalizado = true;

  } else if (this.intentos >= this.maxIntentos) {

    this.mensaje =
      'Perdiste. El numero era ' + this.numeroSecreto;

    this.finalizado = true;

  } else if (this.numeroIngresado < this.numeroSecreto) {

    this.mensaje = 'El numero secreto es mayor';

  } else {

    this.mensaje = 'El numero secreto es menor';

  }
}

  reiniciar() {
    this.numeroSecreto = Math.floor(Math.random() * 20) + 1;
    this.numeroIngresado = 0;
    this.intentos = 0;
    this.mensaje = 'Adivina un numero del 1 al 20';
    this.finalizado = false;
  }
}