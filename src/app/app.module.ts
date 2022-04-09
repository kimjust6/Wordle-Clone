import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './component/navigation/navigation.component';
import { GameComponent } from './component/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ValidWordsComponent } from './component/valid-words/valid-words.component';
import { SolverComponent } from './component/solver/solver.component';
import { AnagramComponent } from './anagram/anagram.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameComponent,
    StatisticsComponent,
    NotfoundComponent,
    ValidWordsComponent,
    SolverComponent,
    AnagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
