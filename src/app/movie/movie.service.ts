import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = 'https://api.themoviedb.org/3';

@Injectable()
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMovie(filter?) {
    return this.httpClient.get(`${API_URL}/discover/movie`);
  }

  public getGenre() {
    return this.httpClient
          .get(`${API_URL}/genre/movie/list`)
          .pipe(
            map((r) => {
              return r['genres'];
            })
          );
  }
}
