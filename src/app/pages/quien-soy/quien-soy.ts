import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienSoyService } from '../../../services/quien-soy';

@Component({
  selector: 'app-quien-soy',
  imports: [CommonModule],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoy implements OnInit {

  usuario: any;

  constructor(private quienSoyService: QuienSoyService) {}

ngOnInit(): void {

  this.quienSoyService.obtenerUsuarioGitHub()
    .subscribe(data => {

      this.usuario = data;
      console.log(data);

    });

}

}