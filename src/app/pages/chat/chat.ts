import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit {

  mensajes: any[] = [];
  nuevoMensaje = '';

  usuario =
    JSON.parse(localStorage.getItem('usuario') || '{}').email;

  constructor(
  private authService: AuthService,
  private cd: ChangeDetectorRef
  ) {
  this.cargarMensajes();
  }
ngOnInit() {
  this.authService.supabaseService.getClient()
    .channel('chat-global')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'mensajes_chat'
      },
      (payload) => {
      console.log('Nuevo mensaje realtime:', payload);
      this.cargarMensajes();
      this.cd.detectChanges();
      }
    )
    .subscribe();
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