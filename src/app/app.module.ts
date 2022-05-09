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
import { ModalTestComponent } from 'src/app/component/test/modal-test.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameComponent,
    StatisticsComponent,
    NotfoundComponent,
    ValidWordsComponent,
    SolverComponent,
    AnagramComponent,
    ModalTestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
