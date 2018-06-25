import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { ImovieSearchResult } from '../DataInterfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  openDetails:any;

  showDetails(imdb:string){
    this.movieDataService.getMovie('i',imdb,1) // i for imdb
    .subscribe((data: ImovieSearchResult) => {
      console.log(data);
      this.openDetails = data;
    });
  }

  constructor(private movieDataService:MovieDataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {
    this.showDetails(params.imdb);
    });
  }

}
