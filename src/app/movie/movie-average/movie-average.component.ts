import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-average',
  templateUrl: './movie-average.component.html',
  styleUrls: ['./movie-average.component.scss']
})
export class MovieAverageComponent implements OnInit {
  @Input() average;
  @Input() legend: boolean;

  constructor() {
    this.legend = true;
  }

  ngOnInit() {
  }

}
