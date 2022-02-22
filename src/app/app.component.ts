import { Component} from '@angular/core';
import { Link } from 'src/models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'votosAngular';

  listaLinks: Link[];
  objetoLink: Link = new Link('','');

  constructor(){

    this.listaLinks= [
        new Link ("Google","https://google.com",5),
        new Link ("Ecosia","https://ecosia.com",3),
        new Link ("Brave","https://brave.com"),
        new Link ("Spotify","https://spotify.com",2)
      ];
  }
  
  submitEnviar():void{
    this.listaLinks.push(this.objetoLink);
    this.objetoLink = new Link('','');

    //console.log(this.listaLinks)
    
  }
}
