import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gift.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'LXZqCTTMr5G3JYShu7RSKo4H19D0Fz5K';
  private servicioUrl: string = `https://api.giphy.com/v1/gifs`;

  private _historial: string[] = [];


  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }
  buscarGifs(query: string): Gif[] {
    if (query.trim().length < 0) return;

    if (!this._historial.includes(query.trim().toLowerCase())) {
      this._historial.unshift(query.trim().toLowerCase());
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', query);
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params}).subscribe(resp => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })

  }


}
