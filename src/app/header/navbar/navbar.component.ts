import { SearchResultComponent } from './../search-result/search-result.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsinputSearchFocus = false;
  focusFunctionSearch() {
           this.IsinputSearchFocus  = true;

  }
  focusOutFunctionSearch() {
       this.IsinputSearchFocus = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
