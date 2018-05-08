import { Component, OnInit } from '@angular/core';
import {PeopleSingleListComponent} from '../chat-room/single-chat/people-single-list/people-single-list.component';
import { ChatSingleBodyComponent} from '../chat-room/single-chat/chat-single-body/chat-single-body.component';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  ProfilePictureSingleParent;
  StatusSingleParent;
  InputBoxClassNameSingleParent;

  chatBodyObject1: ChatBodyObject1 = {
    ProfilePictureSingleParent: null,
    StatusSingleParent: null,
    InputBoxClassNameSingleParent: null
  };

  chatBodyObject2: ChatBodyObject1 = {
    ProfilePictureSingleParent: null,
    StatusSingleParent: null,
    InputBoxClassNameSingleParent: null
  };

  chatBodyObject3: ChatBodyObject1 = {
    ProfilePictureSingleParent: null,
    StatusSingleParent: null,
    InputBoxClassNameSingleParent: null
  };

  constructor() { }

  ngOnInit() {
      this.chatBodyObject1.StatusSingleParent = 'offline';
      this.chatBodyObject1.ProfilePictureSingleParent = '../../../assets/profilePicture/teenp1.jpg';
      this.chatBodyObject1.InputBoxClassNameSingleParent = '1234';

          this.chatBodyObject2 = null;

  }

}

interface ChatBodyObject1 {
  ProfilePictureSingleParent: string;
  StatusSingleParent: string;
  InputBoxClassNameSingleParent: string;
}

interface ChatBodyObject2 {
  ProfilePictureSingleParent: string;
  StatusSingleParent: string;
  InputBoxClassNameSingleParent: string;
}

interface ChatBodyObject3 {
  ProfilePictureSingleParent: string;
  StatusSingleParent: string;
  InputBoxClassNameSingleParent: string;
}


