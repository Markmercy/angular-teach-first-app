import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card:Card;

  constructor() { }

  ngOnInit() {
  }
  Click1(){
    this.card.votes = this.card.votes+1;
  }
  Click2(){
    this.card.votes = this.card.votes-1;
  }


}
