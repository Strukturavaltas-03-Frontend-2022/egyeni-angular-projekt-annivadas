import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieList$: Observable<Movie[]> = this.movieService.getAll();

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

}
