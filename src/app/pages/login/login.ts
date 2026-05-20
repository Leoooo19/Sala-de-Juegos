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
  const { data, error } = await this.authService.login(this.email, this.password);

  console.log('LOGIN:', data, error);

  if (error) {
    this.mensaje = 'Correo o contraseña incorrectos';
    return;
  }

  localStorage.setItem('usuario', JSON.stringify(data.user));

  this.router.navigate(['/']);
  }
}