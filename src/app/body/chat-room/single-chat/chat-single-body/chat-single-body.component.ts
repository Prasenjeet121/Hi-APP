import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-single-body',
  templateUrl: './chat-single-body.component.html',
  styleUrls: ['./chat-single-body.component.css']
})
export class ChatSingleBodyComponent implements OnInit {


 @Input() ProfilePictureSingle;
 @Input() StatusSingle;
 @Input() InputBoxClassNameSingle;
  constructor() { }

  ngOnInit() {
  }

}
