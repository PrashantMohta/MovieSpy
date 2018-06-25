import { Injectable } from '@angular/core';
import {ImovieSearchResult} from './DataInterfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIkey:string="67e94004"
const URLendpoint:string="http://www.omdbapi.com/"

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  
  public getMovie(searchBy:string,searchString:String,pageno:Number)
  {
    let results:ImovieSearchResult;
    let reqUrl:string = `${URLendpoint}?type=movie&${searchBy}=${searchString}&page=${pageno}&apikey=${APIkey}`;
    if(searchBy=="i")
    {
      reqUrl = `${URLendpoint}?type=movie&${searchBy}=${searchString}&apikey=${APIkey}`;
    }
    console.log(reqUrl);
    return this.httpClient.get(reqUrl);
    //results=JSON.parse('{"Search":[{"Title":"Black Panther","Year":"2018","imdbID":"tt1825683","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"},{"Title":"The Pink Panther","Year":"2006","imdbID":"tt0383216","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BNGI2MjVlNzEtZDg1ZS00MGU1LWFhNTQtNzMwZDViOWRkNzhkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"The Pink Panther","Year":"1963","imdbID":"tt0057413","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BNzg5NTYzNDI4OF5BMl5BanBnXkFtZTcwOTQxMTMyNA@@._V1_SX300.jpg"},{"Title":"The Pink Panther 2","Year":"2009","imdbID":"tt0838232","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTIyOTI2ODY2MF5BMl5BanBnXkFtZTcwMzU2MTYxMg@@._V1_SX300.jpg"},{"Title":"The Pink Panther Strikes Again","Year":"1976","imdbID":"tt0075066","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BZjhiNDU3NDEtNzFlMC00NTU2LThlMGMtNTA1ODJkNjIxN2RjXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},{"Title":"The Return of the Pink Panther","Year":"1975","imdbID":"tt0072081","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTM2ODk5NDU2M15BMl5BanBnXkFtZTcwMDQ0MTMyNA@@._V1_SX300.jpg"},{"Title":"Revenge of the Pink Panther","Year":"1978","imdbID":"tt0078163","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTkxODExMzMwMV5BMl5BanBnXkFtZTcwMjU1MTMyNA@@._V1_SX300.jpg"},{"Title":"The Pink Panther Show","Year":"1969–1976","imdbID":"tt0063939","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTBiMDM4ZTktNzBlNS00NDAwLThhMmItOTQ2YTM3MWE0Njg3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Trail of the Pink Panther","Year":"1982","imdbID":"tt0084814","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwMDQ3NTM1N15BMl5BanBnXkFtZTcwODgyMTM4NA@@._V1_SX300.jpg"},{"Title":"Curse of the Pink Panther","Year":"1983","imdbID":"tt0085384","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTE5MjYyNF5BMl5BanBnXkFtZTcwNzY2MTMyNA@@._V1_SX300.jpg"}],"totalResults":"110","Response":"True"}');
    //return results;
  }
  constructor(private httpClient:HttpClient) { }
}
