import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
 
  @Input() datosInput: Link = new Link('','');

  constructor(){
  }

  ngOnInit(): void {
    //console.log(this.datosInput.votes);
  }

}
