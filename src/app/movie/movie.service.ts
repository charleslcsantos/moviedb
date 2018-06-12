import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMovies(filter?) {
    return this.httpClient.get(`/discover/movie`);
  }

  public getMovieById(id) {
    return this.httpClient.get(`/movie/${id}`);
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
