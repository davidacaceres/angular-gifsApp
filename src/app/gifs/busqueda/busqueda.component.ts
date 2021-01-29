import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar')txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private servicio:GifsService){};
  buscar(){
    console.log(this.txtBuscar.nativeElement.value);
    this.servicio.buscarGifs(this.txtBuscar.nativeElement.value);

    this.txtBuscar.nativeElement.value='';
  }
}
