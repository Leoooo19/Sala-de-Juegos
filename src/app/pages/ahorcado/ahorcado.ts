import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-ahorcado',
  imports: [CommonModule],
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css'
})
export class Ahorcado {

  palabras = [
    'ANGULAR',
    'SUPABASE',
    'PROGRAMACION',
    'JUEGO',
    'CODIGO',
    'COMPONENTE'
  ];

  palabra = '';
  letrasAdivinadas: string[] = [];
  intentos = 6;
  mensaje = '';

  abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

constructor(private authService: AuthService) {
  this.iniciarJuego();
}

  iniciarJuego() {
    this.palabra =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];

    this.letrasAdivinadas = [];
    this.intentos = 6;
    this.mensaje = '';
  }

  elegirLetra(letra: string) {

    if (this.letrasAdivinadas.includes(letra)) {
      return;
    }

    this.letrasAdivinadas.push(letra);

    if (!this.palabra.includes(letra)) {
      this.intentos--;
    }

    if (this.gano()) {

    this.mensaje = 'Ganaste';

    this.authService.guardarResultadoAhorcado({

    id: crypto.randomUUID(),

    usuario: JSON.parse(localStorage.getItem('usuario') || '{}').email,

    intentos_restantes: this.intentos,

    letras_usadas: this.letrasAdivinadas.length,

    gano: true,

    fecha: new Date()

  });

}

    if (this.intentos <= 0) {

    this.mensaje = 'Perdiste';

    this.authService.guardarResultadoAhorcado({

    id: crypto.randomUUID(),

    usuario: JSON.parse(localStorage.getItem('usuario') || '{}').email,

    intentos_restantes: 0,

    letras_usadas: this.letrasAdivinadas.length,

    gano: false,

    fecha: new Date()
  });
}
}

  mostrarPalabra() {

    return this.palabra
      .split('')
      .map(letra =>
        this.letrasAdivinadas.includes(letra)
          ? letra
          : '_'
      )
      .join(' ');
  }

  gano() {

    return this.palabra
      .split('')
      .every(letra =>
        this.letrasAdivinadas.includes(letra)
      );
  }
}