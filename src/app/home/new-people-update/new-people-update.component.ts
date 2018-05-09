import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-people-update',
  templateUrl: './new-people-update.component.html',
  styleUrls: ['./new-people-update.component.css']
})
export class NewPeopleUpdateComponent implements OnInit {

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
    },
    {
      profilePicture : '../../../assets/profilePicture/teenp1.jpg',
      nameOfPerson : 'Harry Potter',
      timeOfJoining: 2
    }
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
