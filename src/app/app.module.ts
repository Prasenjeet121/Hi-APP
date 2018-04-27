import { ProfileTabComponent } from './body/user-section/upper-user-section/profile-tab/profile-tab.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProfileComponent } from './body/user-section/upper-user-section/profile/profile.component';
import { SavedPostComponent } from './body/user-section/upper-user-section/profile-tab/saved-post/saved-post.component';
import { ImagePostComponent } from './body/image-post/image-post.component';
import { MultiImagePostComponent } from './body/multi-image-post/multi-image-post.component';
import { VideoPostComponent } from './body/video-post/video-post.component';
import { FollowRequestComponent } from './body/follow-request/follow-request.component';
import { FollowSuggestionComponent } from './body/follow-suggestion/follow-suggestion.component';
import { NotificationComponent } from './body/notification/notification.component';
import { OnlineUsersComponent } from './body/online-users/online-users.component';
import { NewMessageComponent } from './body/new-message/new-message.component';
import { StrangeMessageComponent } from './body/strange-message/strange-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ProfileTabComponent,
    SavedPostComponent,
    ImagePostComponent,
    MultiImagePostComponent,
    VideoPostComponent,
    FollowRequestComponent,
    FollowSuggestionComponent,
    NotificationComponent,
    OnlineUsersComponent,
    NewMessageComponent,
    StrangeMessageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
