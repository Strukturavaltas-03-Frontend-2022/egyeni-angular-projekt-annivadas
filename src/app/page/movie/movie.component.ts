import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  columns: ITableColumn[] = this.configService.movieTableColumns

  movieList$: Observable<Movie[]> = this.movieService.getAll();



  constructor(
    private movieService: MovieService,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
