import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-resultados',
  imports: [CommonModule],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css'
})
export class Resultados implements OnInit {

  mayorMenor: any[] = [];
  ahorcado: any[] = [];
  preguntados: any[] = [];
  adivinaNumero: any[] = [];

constructor(
  private authService: AuthService,
  private cd: ChangeDetectorRef
) {}

async ngOnInit() {

  const mayorMenor =
    await this.authService.obtenerResultadosMayorMenor();

  console.log('Mayor menor:', mayorMenor);

  if (mayorMenor.data) {
    this.mayorMenor = mayorMenor.data;
  }

  const ahorcado =
    await this.authService.obtenerResultadosAhorcado();

  console.log('Ahorcado:', ahorcado);

  if (ahorcado.data) {
    this.ahorcado = ahorcado.data;
  }

  const preguntados =
    await this.authService.obtenerResultadosPreguntados();

  console.log('Preguntados:', preguntados);

  if (preguntados.data) {
    this.preguntados = preguntados.data;
  }

  const adivinaNumero =
    await this.authService.obtenerResultadosAdivinaNumero();

  console.log('Adivina numero:', adivinaNumero);

  if (adivinaNumero.data) {
    this.adivinaNumero = adivinaNumero.data;
  }
  this.cd.detectChanges();
}
}