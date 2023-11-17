import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Series } from '../models/series';
import { Personajes } from '../models/personajes';
import { Seguridad } from '../models/seguridad';
@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) { }

  getSeries(): Observable<any> {
    var request = 'api/series';
    var url = environment.urlApiSeries + request;

    return this._http.get(url);
  }

  findSerie(id: string): Observable<any> {
    var request = 'api/series/' + id;
    var url = environment.urlApiSeries + request

    return this._http.get(url);
  }

  getPersonajesSerie(id: string): Observable<any> {
    var request = '/api/Series/PersonajesSerie/' + id;
    var url = environment.urlApiSeries + request

    return this._http.get(url);
  }

  addPersonaje(personaje: Personajes): Observable<any> {
    // debemos convertir el onjeto class departamento a json
    var json = JSON.stringify(personaje);
    // vamos a enviar un objeto json, por lo que debemos indicar
    // en la peticion el formato de dicho objeto(con headers)
    var header = new HttpHeaders().set('content-type', 'application/json');

    var request = 'api/personajes';
    var url = environment.urlApiSeries + request;

    return this._http.post(url, json, { headers: header });
  }

  getPersonajes(): Observable<any> {
    var request = 'api/personajes';
    var url = environment.urlApiSeries + request;

    return this._http.get(url);
  }

  modificarPersonaje(idPersonaje: number, idSerie: number): Observable<any> {
    var request = 'api/Personajes/' + idPersonaje + "/" + idSerie;
    var url = environment.urlApiSeries + request;

    console.log(url)

    var header = new HttpHeaders().set('content-type', 'application/json');

    return this._http.put(url, {}, { headers: header });
  }

  login(userName:string,password:string): Observable<any>{
    var newSeguridad = new Seguridad( userName,password );
    console.log(userName+" Y "+password)
    var json = JSON.stringify(newSeguridad);
    console.log(json)
    var header = new HttpHeaders().set('content-type', 'application/json');

    var url="https://apiempleadoscoreoauth.azurewebsites.net/Auth/Login"

    return this._http.post(url, json, { headers: header });
  }

  getEmpleados(token:string): Observable<any> {
    
    var url = "https://apiempleadoscoreoauth.azurewebsites.net/api/Empleados"

    var header = new HttpHeaders().set('authorization','bearer '+ token);

    return this._http.get(url,{headers: header });
  }
}
