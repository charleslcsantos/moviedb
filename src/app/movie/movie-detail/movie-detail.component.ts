import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
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
    });
  }

  getMovieCredits(id) {
    this.movieService.getMovieById(id).subscribe((res) => {
      this.movie = res;
    });
  }

}
