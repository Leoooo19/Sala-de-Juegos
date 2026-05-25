import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  mensajes: any[] = [];
  nuevoMensaje = '';

  usuario =
    JSON.parse(localStorage.getItem('usuario') || '{}').email;

  constructor(private authService: AuthService) {
    this.cargarMensajes();
  }

  async cargarMensajes() {

    const { data, error } =
      await this.authService.obtenerMensajesChat();

    if (!error && data) {
      this.mensajes = data;
    }
  }

  async enviarMensaje() {

    if (!this.nuevoMensaje.trim()) {
      return;
    }

    const mensaje = {
      id: crypto.randomUUID(),

      usuario: this.usuario,

      mensaje: this.nuevoMensaje,

      fecha: new Date()
    };

    await this.authService.guardarMensajeChat(mensaje);

    this.nuevoMensaje = '';

    this.cargarMensajes();
  }
}