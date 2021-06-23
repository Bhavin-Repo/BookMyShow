import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieEntriesService } from './Core/movie-entries.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMyShow';

  constructor(private route: Router){

  }

  onClick() {
    this.route.navigateByUrl('');
  }
}
