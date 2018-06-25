import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { ImovieSearchResult } from '../DataInterfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnChanges {
  searchString:string="";
  pageno:number;
  maxPages:number;
  previousSearchString:string="";
  searchResults:ImovieSearchResult;
  constructor(public movieDataService:MovieDataService,private route: ActivatedRoute,private router: Router) { }
  
  prevPage(){
    let nextPage:number=Number(this.pageno)-1;
    this.router.navigateByUrl(`/search/${this.searchString}/page/${nextPage}`);
    window.scrollTo(0, 0);

  }
  nextPage(){
    let nextPage:number=Number(this.pageno)+1;
    this.router.navigateByUrl(`/search/${this.searchString}/page/${nextPage}`);
    window.scrollTo(0, 0);

  }
  ngOnChanges(){
    
  }

  ngOnInit() {
    this.searchResults=null;
    this.route.params.subscribe(params =>
      {
        this.searchString=params.id;
        this.pageno=params.pg;

        if(this.previousSearchString!=this.searchString && this.searchString!="")
        {
      this.movieDataService.getMovie('s',this.searchString,this.pageno)// search
      .subscribe((data: ImovieSearchResult) => {
        console.log(data);
        this.searchResults = data;
        this.maxPages=(data.totalResults/10);
      });
    }
      } 
    
    );

    //this.searchResults=JSON.parse('{"Search":[{"Title":"Black Panther","Year":"2018","imdbID":"tt1825683","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"},{"Title":"The Pink Panther","Year":"2006","imdbID":"tt0383216","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BNGI2MjVlNzEtZDg1ZS00MGU1LWFhNTQtNzMwZDViOWRkNzhkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"The Pink Panther","Year":"1963","imdbID":"tt0057413","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BNzg5NTYzNDI4OF5BMl5BanBnXkFtZTcwOTQxMTMyNA@@._V1_SX300.jpg"},{"Title":"The Pink Panther 2","Year":"2009","imdbID":"tt0838232","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTIyOTI2ODY2MF5BMl5BanBnXkFtZTcwMzU2MTYxMg@@._V1_SX300.jpg"},{"Title":"The Pink Panther Strikes Again","Year":"1976","imdbID":"tt0075066","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BZjhiNDU3NDEtNzFlMC00NTU2LThlMGMtNTA1ODJkNjIxN2RjXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},{"Title":"The Return of the Pink Panther","Year":"1975","imdbID":"tt0072081","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTM2ODk5NDU2M15BMl5BanBnXkFtZTcwMDQ0MTMyNA@@._V1_SX300.jpg"},{"Title":"Revenge of the Pink Panther","Year":"1978","imdbID":"tt0078163","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTkxODExMzMwMV5BMl5BanBnXkFtZTcwMjU1MTMyNA@@._V1_SX300.jpg"},{"Title":"The Pink Panther Show","Year":"1969–1976","imdbID":"tt0063939","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTBiMDM4ZTktNzBlNS00NDAwLThhMmItOTQ2YTM3MWE0Njg3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Trail of the Pink Panther","Year":"1982","imdbID":"tt0084814","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMDQ3NTM1N15BMl5BanBnXkFtZTcwODgyMTM4NA@@._V1_SX300.jpg"},{"Title":"Curse of the Pink Panther","Year":"1983","imdbID":"tt0085384","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTE5MjYyNF5BMl5BanBnXkFtZTcwNzY2MTMyNA@@._V1_SX300.jpg"}],"totalResults":"110","Response":"True"}');
  }

}
