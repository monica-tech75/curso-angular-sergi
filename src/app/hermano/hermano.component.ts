import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css'],
})
export class HermanoComponent implements OnInit {
  nombre?: string;
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  /* private _servicioFamiliar2 : inject(ServicioFamiliarService); */

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeño('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoPequeño();
  }
  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoGrande() || ''
    );
  }
  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
