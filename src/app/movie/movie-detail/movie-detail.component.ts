import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';
import { LoaderService } from '../../shared/loader/loader.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(m => {
      this.getMovieDetail(m.id);
      this.getMovieCredits(m.id);
    });
  }

  getMovieDetail(id) {
    this.movieService.getMovieById(id).subscribe((res) => {
      this.movie = res;
      setTimeout(() => this.loaderService.showLoader(false), 2000);
    });
  }

  getMovieCredits(id) {
    this.movieService.getMovieById(id).subscribe((res) => {
      this.movie = res;
    });
  }

}
