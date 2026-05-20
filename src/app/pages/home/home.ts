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

  async ngOnInit() {
    const { data } = await this.authService.obtenerUsuario();
    this.usuario = data.user;
  }

  async cerrarSesion() {
    await this.authService.logout();
    this.usuario = null;
  }
}