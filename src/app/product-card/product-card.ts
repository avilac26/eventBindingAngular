import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() titulo: string = "Camisa";
  @Input() cantidadStock: number =10;
  @Input() precio: number = 15000;
  @Input() tieneDescuento: boolean = false;
  @Input() descripcion: string = "Camisa de algodón 100%";
    cantidad: number =1;
    mostrarDescripcion: boolean = false;

  mostrarOcultarDescripcion() {
    this.mostrarDescripcion = ! this.mostrarDescripcion;
  }

  incrementarCantidad() {
    if (this.cantidad > (this.cantidadStock - 1)) {
      console.log("Cantidad máxima alcanzada")
    }else {
    this.cantidad = this.cantidad + 1;
    }
  }
  decrementarCantidad() {
    if (this.cantidad == 1){
      console.log("Cantidad mínima alcanzada")
    }else {
      this.cantidad = this.cantidad - 1;
  }
  }
}
