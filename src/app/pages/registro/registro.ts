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
  mostrarPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

async registrar() {

  if (!this.nombre || !this.apellido || !this.edad || !this.email || !this.password) {
    this.mensaje = 'Todos los campos son obligatorios';
    return;
  }

  if (!this.email.includes('@')) {
    this.mensaje = 'El email debe tener un formato valido';
    return;
  }

  if (this.password.length < 6) {
    this.mensaje = 'La contraseña debe tener al menos 6 caracteres';
    return;
  }

  const { data, error } = await this.authService.registrar(this.email, this.password);

  if (error) {
    if (error.message.includes('already')) {
      this.mensaje = 'El usuario ya se encuentra registrado';
    } else {
      this.mensaje = 'No se pudo registrar el usuario';
    }
    return;
  }

  await this.authService.guardarDatosUsuario({
    id: data.user?.id,
    email: this.email,
    nombre: this.nombre,
    apellido: this.apellido,
    edad: this.edad
  });

  this.router.navigate(['/']);
}
}