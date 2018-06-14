import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieFilter } from './MovieFilter.model';

@Injectable()
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMovies(filter?: MovieFilter) {
    let params;
    if (filter) {
      params = new HttpParams();
      Object.keys(filter).forEach(prop => {
        params = params.append(prop, filter[prop]);
      });
    }
    return this.httpClient.get(`/discover/movie`, { params });
  }

  public getMovieById(id) {
    return this.httpClient.get(`/movie/${id}`);
  }

  public getMovieCredits(id) {
    return this.httpClient.get(`/movie/${id}/credits`);
  }

  public getGenre() {
    return this.httpClient
          .get(`/genre/movie/list`)
          .pipe(
            map((r) => {
              return r['genres'];
            })
          );
  }
}
