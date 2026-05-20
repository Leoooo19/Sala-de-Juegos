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
    const { error } = await this.authService.login(this.email, this.password);

    if (error) {
      this.mensaje = 'Correo o contraseña incorrectos';
      return;
    }

    this.router.navigate(['/']);
  }
}