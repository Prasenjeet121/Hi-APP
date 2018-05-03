import { Component, OnInit } from '@angular/core';
import {PeopleSingleListComponent} from '../chat-room/single-chat/people-single-list/people-single-list.component';
import { ChatSingleBodyComponent} from '../chat-room/single-chat/chat-single-body/chat-single-body.component';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
