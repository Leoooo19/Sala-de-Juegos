import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public supabaseService: SupabaseService) {}

  registrar(email: string, password: string) {
    return this.supabaseService.getClient().auth.signUp({
      email,
      password
    });
  }

  login(email: string, password: string) {
    return this.supabaseService.getClient().auth.signInWithPassword({
      email,
      password
    });
  }

  logout() {
    return this.supabaseService.getClient().auth.signOut();
  }

  obtenerUsuario() {
  return this.supabaseService.getClient().auth.getUser();
  }

  obtenerSesion() {
  return this.supabaseService.getClient().auth.getSession();
  }
  guardarDatosUsuario(usuario: any) {
  return this.supabaseService
    .getClient()
    .from('usuarios')
    .insert(usuario);
}
guardarResultadoMayorMenor(resultado: any) {
  return this.supabaseService
    .getClient()
    .from('resultados_mayor_menor')
    .insert(resultado);
}
guardarResultadoAhorcado(resultado: any) {
  return this.supabaseService
    .getClient()
    .from('resultados_ahorcado')
    .insert(resultado);
}
guardarMensajeChat(mensaje: any) {
  return this.supabaseService
    .getClient()
    .from('mensajes_chat')
    .insert(mensaje);
}
guardarResultadoPreguntados(resultado: any) {
  return this.supabaseService
    .getClient()
    .from('resultados_preguntados')
    .insert(resultado);
}

obtenerMensajesChat() {
  return this.supabaseService
    .getClient()
    .from('mensajes_chat')
    .select('*')
    .order('fecha', { ascending: true });
}

}