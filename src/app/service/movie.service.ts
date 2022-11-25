import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl: string = environment.apiUrl

  entityName: string = 'cinema'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}${this.entityName}`)
  }


}
