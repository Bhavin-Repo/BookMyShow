import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieEntriesService } from '../Core/movie-entries.service';
import { Movie } from '../Model/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies : Movie[];


  constructor(private movieService : MovieEntriesService, private router : Router) { }

  ngOnInit(): void {
    this.movieService.getEntries().subscribe(movies =>{
      this.movies = movies;
    })
  }


  onRowSelect(event,data) {
    this.movieService.selectedMovie = data.Title;
    this.router.navigateByUrl('/movies');
}

}
