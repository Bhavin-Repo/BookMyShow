import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieEntriesService } from '../Core/movie-entries.service';
import { Movie } from '../Model/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies : Movie[];
  selectedMovie : Movie;

  constructor(private movieService : MovieEntriesService, private router : Router) { }

  ngOnInit(): void {
    this.movies = this.movieService.movies;
  }


  onRowSelect(event,data) {
    debugger;
    alert("Row Clicked!");
    this.router.navigate(['/movies', {Title: data.Title}]);
}

}
