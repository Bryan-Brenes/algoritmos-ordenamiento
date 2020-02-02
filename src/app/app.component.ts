import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cantidadForm: number = 100;
  minimoForm: number = 100;
  maximoForm: number = 300;

  cantidad: number = 100;
  minimo: number = 100;
  maximo: number = 300;

  private maximaCantidad: number = 200;

  actualizarNumeros() {
    if (this.cantidadForm != undefined &&
      this.minimoForm != undefined &&
      this.maximoForm != undefined &&
      this.minimoForm < this.maximoForm) {
      if (this.cantidadForm > this.maximaCantidad) {
        this.cantidadForm = this.maximaCantidad
      }
      this.cantidad = this.cantidadForm;
      this.minimo = this.minimoForm;
      this.maximo = this.maximoForm;
    }
  }
}
