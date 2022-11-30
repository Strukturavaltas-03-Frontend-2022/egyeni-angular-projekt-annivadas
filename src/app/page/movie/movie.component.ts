import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';

import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  columns: ITableColumn[] = this.config.movieTableColumns;

  movieList$: Observable<Movie[]> = this.movieService.getAll();



  constructor(
    private movieService: MovieService,
    private config: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
