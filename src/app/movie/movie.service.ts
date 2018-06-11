import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.themoviedb.org/3';

@Injectable()
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMovie(filter?) {
    return this.httpClient.get(`${API_URL}/discover/movie`);
  }
}
