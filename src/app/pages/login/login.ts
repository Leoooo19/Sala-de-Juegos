import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async ingresar() {

    if (!this.email || !this.password) {
  this.mensaje = 'Todos los campos son obligatorios';
  return;
  }

    if (!this.email.includes('@')) {
  this.mensaje = 'El email debe tener un formato válido';
  return;
  }
    const { data, error } = await this.authService.login(this.email, this.password);

    console.log('LOGIN:', data, error);

  if (error) {

    if (error.message.includes('Invalid login credentials')) {
    this.mensaje = 'Correo o contraseña incorrectos';
    } else {
    this.mensaje = 'Error al iniciar sesión';
    }

  return;
  }
    localStorage.setItem('usuario', JSON.stringify(data.user));

    window.location.reload();

    this.router.navigate(['/']);
  }

  loginRapido(email: string, password: string) {
    this.email = email;
    this.password = password;
}
}