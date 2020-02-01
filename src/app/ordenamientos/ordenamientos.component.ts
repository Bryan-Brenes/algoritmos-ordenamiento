import { Component, OnInit, AfterViewInit, Input, OnChanges, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ordenamientos',
  templateUrl: './ordenamientos.component.html',
  styleUrls: ['./ordenamientos.component.css']
})
export class OrdenamientosComponent implements OnInit {

  public numeros: number[];
  @Input() max: number;
  @Input() min: number;
  @Input() cantidad: number;

  constructor() { }

  ngOnInit() {
    this.numeros = this.generarNumerosAleratorios(this.cantidad, this.min, this.max);

  }

  ngAfterViewInit() {
    //console.log("afterInit")
    this.estilizarListaNumeros();
  }

  ngAfterViewChecked() {
    console.log("afterviewchecked");
    this.estilizarListaNumeros();
  }

  ngOnChanges() {
    //this.removerSpans();
    this.numeros = this.generarNumerosAleratorios(this.cantidad, this.min, this.max);
    this.estilizarListaNumeros();
  }

  generarNumerosAleratorios(cantidad: number, min: number, max: number) {

    this.max = max;
    this.min = min;
    this.cantidad = cantidad;
    let lista = []
    for (let i = 0; i < cantidad; i++) {
      lista.push(Math.round((Math.random() * (max - min))) + min);
    }
    //lista.sort();
    //console.log(lista)
    return lista;
  }

  removerSpans() {
    var e = document.getElementById('contenedor-formulario');

    //e.firstElementChild can be used. 
    var child = e.lastElementChild;
    while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
    }
  }


  estilizarListaNumeros() {
    let spans = document.getElementsByClassName('numero') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < spans.length; i++) {
      spans.item(i).style.display = "inline-block";
      let h = (100 * this.numeros[i]) / this.max;
      let w = 0;
      if (this.numeros.length > 100) {
        w = Math.round(document.getElementById('contenedor-formulario').offsetWidth / this.numeros.length);
        spans.item(i).style.width = `${w}px`;
      } else {
        w = 100 / this.numeros.length;
        spans.item(i).style.width = `${String(w)}%`;
      }
      //console.log("h: ", h, "w: ", w);
      // spans.item(i).style.minWidth = '1px';
      // spans.item(i).style.border = "1px solid rgba(0,0,0,0.5)";
      spans.item(i).style.height = `${String(h)}%`;
      //spans.item(i).style.backgroundColor = 'blue';
      console.log("item: ", spans.item(i))
    }
  }

}
