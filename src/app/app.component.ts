import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  search:string = "";
  timer:number;
  constructor( public router:Router,private activeRoute: ActivatedRoute){}
  ngOnInit(){
   this.router.events.subscribe(val => {
     
     if (val instanceof RoutesRecognized) {
      if(val.state.root.firstChild){
      this.search=val.state.root.firstChild.params.id;
    }
  }
    });
     
  }
  home()
  {
    this.search='';
    this.router.navigateByUrl('/');

  }
  usertyped($event:KeyboardEvent)
  { 
    let delay:number=500;
    if($event.keyCode ==13 || (<HTMLInputElement>$event.target).value=="")
    {
      delay=0;
    }
    if(this.timer){window.clearTimeout(this.timer);}
    this.timer=window.setTimeout(
      ()=>{
          this.search=(<HTMLInputElement>$event.target).value;
          //Router.
          if(this.search!="")
          {this.router.navigateByUrl('/search/'+this.search);}
          else
          {
            this.router.navigateByUrl('/');
          }

          console.log(this.search);
      },delay)//ms
  }
}
