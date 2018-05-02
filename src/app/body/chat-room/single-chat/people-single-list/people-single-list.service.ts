import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class PeopleSingleListService {
  initialIndex = 0;
  finalIndex = 4;
  canRunFilterArray = true;
  canRunPrevFilterArray = true;

  singlePeopleHolderArray = [
    {
      nameOfThePerson : 'Harry Potter',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp1.jpg',
      idOfPerson: 1,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Adam Henary',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp2.jpg',
      idOfPerson: 2,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Lucas Jone',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp3.jpg',
      idOfPerson: 3,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Jack Sen',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp4.jpg',
      idOfPerson: 4,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Jone Sen',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp5.jpg',
      idOfPerson: 5,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Bucky Kaul',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen1.jpeg',
      idOfPerson: 6,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Marvel Captain',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp7.jpg',
      idOfPerson: 7,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Super Man',
      ProfileOfPerson: '../../../../../assets/profilePicture/teenp8.jpg',
      idOfPerson: 8,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Spider man ',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen2.jpg',
      idOfPerson: 9,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Iron Man',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen3.jpg',
      idOfPerson: 10,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Star Trek',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen4.jpg',
      idOfPerson: 11,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Power Ranger',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen5.jpg',
      idOfPerson: 12,
      statusOfPerson: 'online'
    },
    {
      nameOfThePerson : 'Hermaini Renger',
      ProfileOfPerson: '../../../../../assets/profilePicture/teen7.jpg',
      idOfPerson: 13,
      statusOfPerson: 'online'
    }


  ];



   filterArrayPeople() {
    const filterTheArraypeople = [];
     const initialIndexLocal = this.initialIndex;
     const finalIndexLocal = this.finalIndex;
     const  listOfPeople = this.singlePeopleHolderArray;
      $.each(this.singlePeopleHolderArray, function(index, value ) {
              if (index >= initialIndexLocal && index <= finalIndexLocal) {
                  filterTheArraypeople.push(listOfPeople[index]);

              }
      });
      console.log(filterTheArraypeople);
      return filterTheArraypeople ;
   }

   nextPeopleSingleSer() {
     this.canRunPrevFilterArray = true;
     console.log(this.initialIndex);
     console.log(this.finalIndex);
      const totalItemInArraysinglePeopleHolderArray = this.singlePeopleHolderArray.length + 1;
       const  valToCheck = (this.finalIndex + 4);

       if (valToCheck <= totalItemInArraysinglePeopleHolderArray || this.finalIndex <= totalItemInArraysinglePeopleHolderArray) {
            this.initialIndex = this.finalIndex ;
             this.finalIndex = valToCheck ;
             console.log('run');

       } else {
                  this.canRunFilterArray = false;
       }
   }

   prevPeopleSingleSer() {
     console.log(this.initialIndex);
     console.log(this.finalIndex);
     this.canRunFilterArray = true;
     if (this.initialIndex === 0) {
      this.canRunPrevFilterArray = false;
     } else {

              this.finalIndex = this.initialIndex;
              this.initialIndex = (this.initialIndex - 4);

     }

   }

  constructor() {


  }

}

