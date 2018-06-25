import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'details/:imdb', component: MovieDetailsComponent },
  { path: 'search/:id', redirectTo: 'search/:id/page/1', pathMatch: 'full' },
  { path: 'search/:id/page/:pg', component: MovieComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [ 

    BrowserModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
