import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quien-soy',
  imports: [CommonModule],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoy implements OnInit {

  usuario: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('https://api.github.com/users/Leoooo19')
      .subscribe(data => {

        this.usuario = data;
        console.log(data);

      });

  }

}