import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registrar() {
    const { error } = await this.authService.registrar(this.email, this.password);

    if (error) {
      this.mensaje = 'El usuario ya se encuentra registrado o los datos son inválidos';
      return;
    }

    this.router.navigate(['/']);
  }
}