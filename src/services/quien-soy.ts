import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuienSoyService {

    constructor(private http: HttpClient) {}

    obtenerUsuarioGitHub() {
    return this.http.get('https://api.github.com/users/Leoooo19');
    }

}