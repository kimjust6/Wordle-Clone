import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { gameNumber } from 'src/app/utilities/interfaces';
import { GameComponent } from '../game/game.component';
import { EmitterService } from 'src/app/services/emitter.service';
@Component({
  selector: 'app-game-wrapper',
  templateUrl: './game-wrapper.component.html',
  styleUrls: ['./game-wrapper.component.scss'],
})
export class GameWrapperComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  public readonly gameNumberType = gameNumber;
  public gameNo: gameNumber = gameNumber.null;

  constructor(private emitterService: EmitterService) {
    // subscribe to get the :gameNo from activated route
    this.subscriptions.push(
      this.emitterService.pageNumberCtrlItem$.subscribe((res: gameNumber) => {
        this.gameNo = res;
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    for (let sub of this.subscriptions) {
      sub?.unsubscribe();
    }
  }
}
