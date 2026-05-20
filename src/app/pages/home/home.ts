import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  usuario: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  const usuarioGuardado = localStorage.getItem('usuario');

  if (usuarioGuardado) {
    this.usuario = JSON.parse(usuarioGuardado);
  }
  }

  async cerrarSesion() {
  await this.authService.logout();
  localStorage.removeItem('usuario');
  this.usuario = null;
  }
}