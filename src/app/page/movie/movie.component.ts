import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  columns: ITableColumn[] = this.configService.movieTableColumns

  movieList$: Observable<Movie[]> = this.movieService.getAll();

  phrase: string = '';
  filterPhrase: string = '';
  sorterPhrase: string = '';


  constructor(
    private movieService: MovieService,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
