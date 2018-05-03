
import { NavbarComponent } from './../../../../header/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ProfileTabComponent } from '../profile-tab/profile-tab.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  windowsHeight = null;
  windowsWidth = null;

  constructor() { }

  ngOnInit() {
    $( window ).resize(function() {
      $( '.windowsDimension' ).html( '<div>' + $( window ).width() + '</div>' );
    });
  }

}
