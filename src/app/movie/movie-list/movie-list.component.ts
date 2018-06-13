import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { MovieFilter } from '../shared/MovieFilter.model';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  public response = {};
  public genres;

  constructor(
    private movieService: MovieService,
    private loaderService: LoaderService
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

  getMovies(filters?) {
    this.loaderService.showLoader();
    this.movieService.getMovies(filters).subscribe((res) => {
      this.response = res;
      setTimeout(() => this.loaderService.showLoader(false), 2000);
    });
  }

  previousPage() {
    this.getMovies({
      page: (this.response['page'] - 1)
    });
  }

  nextPage() {
    this.getMovies({
      page: (this.response['page'] + 1)
    });
  }

}
