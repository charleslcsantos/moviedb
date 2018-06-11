import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public response = {};
  public genres;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getGenre();
    this.getMovies();
  }

  getGenre() {
    this.movieService.getGenre().subscribe((res) => {
      this.genres = res;
    });
  }

  getMovies() {
    this.movieService.getMovie().subscribe((res) => {
      this.response = res;
    });
  }

}
