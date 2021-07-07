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
      this.movies =  [
        {
            "Language": "ENGLISH",
            "Location": "PUNE",
            "Plot": "Forced to spend his summer holidays with his muggle relations, Harry Potter gets a real shock when he gets a surprise visitor: Dobby the house-elf, who warns Harry Potter against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobby's warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening: Harry is suddenly hearing mysterious voices from inside the walls, muggle-born students are being attacked, and a message scrawled on the wall in blood puts everyone on his/her guard - \"The Chamber Of Secrets Has Been Opened. Enemies Of The Heir, Beware\" .",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
            "SoundEffects": [
                "DOLBY",
                "DTS"
            ],
            "Stills": [
                "https://i.imgur.com/3fJ1P48.gif",
                "https://i.imgur.com/j6ECXmD.gif",
                "https://i.imgur.com/v0ooIH0.gif"
            ],
            "Title": "Harry Potter and the Chamber of Secrets",
            "imdbID": "tt0295297",
            "listingType": "NOW_SHOWING",
            "imdbRating": "7.4"
        },
        {
            "Language": "HINDI",
            "Location": "DELHI",
            "Plot": "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
            "SoundEffects": [
                "RX6",
                "SDDS"
            ],
            "Stills": [
                "https://i.imgur.com/i3aD05u.png",
                "https://i.imgur.com/ABinULO.gif",
                "https://i.imgur.com/Wflfyct.gif"
            ],
            "listingType": "NOW_SHOWING",
            "Title": "Harry Potter and the Deathly Hallows: Part 2",
            "imdbID": "tt1201607",
            "imdbRating": "8.1"
        },
        {
            "Language": "ENGLISH",
            "Location": "DELHI",
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg",
            "SoundEffects": [
                "RX6",
                "SDDS"
            ],
            "Stills": [
                "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY99_CR24,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY99_CR29,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            ],
            "Title": "The Shawshank Redemption",
            "imdbID": "tt0111161",
            "listingType": "NOW_SHOWING",
            "imdbRating": "9.2"
        },
        {
            "Language": "HINDI",
            "Location": "BANGALORE",
            "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50_SY1000_CR0,0,704,1000_AL_.jpg",
            "SoundEffects": [
                "RX6",
                "SDDS"
            ],
            "Stills": [
                "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UX99_CR0,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_UY99_CR12,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTI2ODEzMTI1MF5BMl5BanBnXkFtZTYwNjI3MDU2._V1_UX100_CR0,0,100,100_AL_.jpg"
            ],
            "Title": "The Godfather",
            "imdbID": "tt0068646",
            "listingType": "UP_COMING",
            "imdbRating": "8.1"
        },
        {
            "Language": "HINDI",
            "Location": "BANGALORE",
            "Plot": "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL50_SY1000_CR0,0,675,1000_AL_.jpg",
            "SoundEffects": [
                "RX6",
                "SDDS"
            ],
            "Stills": [
                "https://m.media-amazon.com/images/M/MV5BMTM5NjA1OTYyOV5BMl5BanBnXkFtZTcwMzgzMTk2Mw@@._V1_UY99_CR69,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BOTk5NDczOTg3N15BMl5BanBnXkFtZTcwMTgzMTk2Mw@@._V1_UY99_CR67,0,99,99_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTkyMjQ4ODk1NF5BMl5BanBnXkFtZTcwMjcxMTk2Mw@@._V1_UX100_CR0,0,100,100_AL_.jpg"
            ],
            "Title": "The Dark Knight",
            "imdbID": "tt1201607",
            "listingType": "NOW_SHOWING",
            "imdbRating": "8.1"
        }];
  }


  onRowSelect(event,data) {
    this.movieService.selectedMovie = data.Title;
    this.router.navigate(['/movies', this.movieService.selectedMovie]);
  }

}
