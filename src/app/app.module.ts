import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './page/movie/movie.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { MoviePipe } from './pipe/movie.pipe';
import { MovieEditorComponent } from './page/movie-editor/movie-editor.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavComponent,
    HomeComponent,
    MoviePipe,
    MovieEditorComponent,
    SorterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
