import { PeopleSingleListService } from './people-single-list.service';
import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-people-single-list',
  templateUrl: './people-single-list.component.html',
  styleUrls: ['./people-single-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(50)
      ]),
      transition('* => void', [
        animate(50, style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('flyInOutIN', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(50)
      ]),
      transition('* => void', [
        animate(50, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class PeopleSingleListComponent implements OnInit {

  isRight = true;
  arrayToDisplay = [];

  prevPeopleSingle() {
      this.isRight = false;
        this.peopleSingleList.prevPeopleSingleSer();
        if (this.peopleSingleList.canRunPrevFilterArray) {this.arrayToDisplay = this.peopleSingleList.filterArrayPeople(); }

  }

  nextPeopleSingle() {
      this.isRight = true;
       this.peopleSingleList.nextPeopleSingleSer();
       if (this.peopleSingleList.canRunFilterArray) {        this.arrayToDisplay = this.peopleSingleList.filterArrayPeople();
       }
  }
  constructor(private peopleSingleList: PeopleSingleListService) {

   }

  ngOnInit() {
       this.arrayToDisplay = this.peopleSingleList.filterArrayPeople();
       console.log(this.arrayToDisplay);

  }

}




