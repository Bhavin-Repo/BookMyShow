import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './home/movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';

const routes: Routes = [{ path: '', component: HomeComponent },
                { path: 'movies', component: MovieDetailsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
