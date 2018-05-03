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
import { GroupAdditionComponent } from './body/group-addition/group-addition.component';
import { HomePageComponent } from './body/home/home-page/home-page.component';
import { HomeOnlineDistanceComponent } from './body/home/home-online-distance/home-online-distance.component';
import { TextHomePostComponent } from './body/home/text-home-post/text-home-post.component';
import { PhotosHomePostComponent } from './body/home/photos-home-post/photos-home-post.component';
import { VideosHomePostComponent } from './body/home/videos-home-post/videos-home-post.component';
import { LinkHomePostComponent } from './body/home/link-home-post/link-home-post.component';
import { ChatRoomComponent } from './body/chat-room/chat-room.component';
import { PeopleSingleListComponent } from './body/chat-room/single-chat/people-single-list/people-single-list.component';
import { ChatSingleBodyComponent } from './body/chat-room/single-chat/chat-single-body/chat-single-body.component';
import { PeopleSingleListService } from './body/chat-room/single-chat/people-single-list/people-single-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchResultComponent } from './header/search-result/search-result.component';

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
    StrangeMessageComponent,
    GroupAdditionComponent,
    HomePageComponent,
    HomeOnlineDistanceComponent,
    TextHomePostComponent,
    PhotosHomePostComponent,
    VideosHomePostComponent,
    LinkHomePostComponent,
    ChatRoomComponent,
    PeopleSingleListComponent,
    ChatSingleBodyComponent,
    SearchResultComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [PeopleSingleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
