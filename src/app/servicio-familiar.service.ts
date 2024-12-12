import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  setHermanoGrande(nombre: string): void {
    this.hermanoGrande = nombre;
  }

  getHermanoPequeño(): string {
    return this.hermanoPequeño || '';
  }

  setHermanoPequeño(nombre: string): void {
    this.hermanoPequeño = nombre;
  }

  saludar(nombre: string) {
    console.log(`Hola ${nombre}`);
  }
  preguntarPorHijo(): string {
    return '¿como esta tu hijo?';
  }

  constructor() {}
}
