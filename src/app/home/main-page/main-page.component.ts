import { NewPeopleUpdateComponent } from './../new-people-update/new-people-update.component';
import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  listOfPeople: ListOfPeople[] = [
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    }
  ];

  downListTexts = [
    'About',
    'Help Center',
    'Blog',
    'Status',
    'Jobs',
    'Terms',
    'Privacy Policy',
    'Cookies',
    'Ads info',
    'Brand',
    'Apps',
    'Advertise',
    'Marketing',
    'Businesses',
    'Developers',
    'Directory',
    'Settings',
  ];

  constructor() { }

  ngOnInit() {
  }

}



interface ListOfPeople {
  profilePicture: string;
  nameOfPerson: string;
  timeOfJoining: number;
}
