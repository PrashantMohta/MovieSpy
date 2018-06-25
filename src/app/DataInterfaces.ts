
export interface Imovie{
    Title:string,
    Year:number,
    imdbID:string,
    Type:string,
    Poster:string;
}

export interface ImovieSearchResult{
    Search?:Imovie[],
    totalResults?:number,
    Response:boolean,
    Error?:boolean
}