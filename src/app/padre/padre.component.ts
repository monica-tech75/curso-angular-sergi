import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  nombre?: string;
  fecha?: Date = new Date();
  dolar?: number = 1000.5;
  pi?: number = Math.PI;
  factor?: number = 75;
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoPequeño() || ''
    );
  }
  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  mensajePadre = 'mensaje desde el padre primero';

  reciboMensaje: string = '';

  recibirMensaje($event: string) {
    this.reciboMensaje = $event;
  }

  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }
  decrementar() {
    this.valorContador--;
  }
}
