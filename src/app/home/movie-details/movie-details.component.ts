import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieEntriesService } from 'src/app/Core/movie-entries.service';
import { Movie } from 'src/app/Model/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie : Movie;
  movies: Movie[]

  constructor(private route: ActivatedRoute, private movieService : MovieEntriesService, private router: Router) {
    this.movies = movieService.movies;
   }

  ngOnInit() {
  // First get the movie id from the current route.
   const routeParams = this.route.snapshot.paramMap;
   const titleFromRoute = routeParams.get('Title');

    // Find the movie that correspond with the id provided in route.
    if (this.movieService.selectedMovie !== "") {
      this.movie = this.movies.find(movie => movie.Title === this.movieService.selectedMovie);
    } else {
      this.movie = this.movies.find(movie => movie.Title === titleFromRoute);
    } 
  }

  onBack () : void {
    this.router.navigate(['/']);
  }
}