import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private service: GifsService) { }

  ngOnInit(): void {
  }
   get historial (){
     return this.service.historial;
   }


   buscar(query:string):void{
     console.log('Buscando '+query);

     this.service.buscarGifs(query);
   }
}
