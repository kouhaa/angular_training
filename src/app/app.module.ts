import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrialComponent } from './trial/trial.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TrendsComponent } from './trends/trends.component';
import { TweetComponent } from './tweet/tweet.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { RecommendedUserComponent } from './recommended-user/recommended-user.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    ProfileCardComponent,
    TrendsComponent,
    TweetComponent,
    TimeLineComponent,
    RecommendedUserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
