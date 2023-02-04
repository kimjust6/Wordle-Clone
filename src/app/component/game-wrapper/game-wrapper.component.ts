import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { gameNumber } from 'src/app/utilities/interfaces';
// import { EmitterService } from 'src/app/services/emitter.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-wrapper',
  templateUrl: './game-wrapper.component.html',
  styleUrls: ['./game-wrapper.component.scss'],
})
export class GameWrapperComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  public readonly gameNumberType = gameNumber;
  public gameNo: gameNumber = gameNumber.null;
  public gameWrapperPassedWord: string = '';

  constructor(
    // private emitterService: EmitterService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((res: any) => {
      this.gameNo = res?.gameNo;
      switch (Number(res?.gameNo)) {
        case gameNumber.first: {
          this.gameWrapperPassedWord = 'SLEEP';
          break;
        }
        case gameNumber.second: {
          this.gameWrapperPassedWord = 'WHINE';
          break;
        }
        case gameNumber.third: {
          this.gameWrapperPassedWord = 'BIRTH';
          break;
        }
        default: {
        }
      }
    });
    // subscribe to get the :gameNo from activated route
    // this.subscriptions.push(
    //   this.emitterService.pageNumberCtrlItem$.subscribe((res: gameNumber) => {
    //     this.gameNo = res;
    //     switch (res) {
    //       case gameNumber.first: {
    //         this.gameWrapperPassedWord = 'SLEEP';
    //         console.log(1);
    //         break;
    //       }
    //       case gameNumber.second: {
    //         this.gameWrapperPassedWord = 'WHINE';
    //         break;
    //       }
    //       case gameNumber.third: {
    //         this.gameWrapperPassedWord = 'BIRTH';
    //         break;
    //       }
    //       default: {
    //         console.log(
    //           res,
    //           ': gameWrapperPassedWord',
    //           this.gameWrapperPassedWord
    //         );
    //       }
    //     }
    //     console.log('gameWrapperPassedWord2', this.gameWrapperPassedWord);
    //   })
    // );
  }

  ngOnInit() {}

  ngOnDestroy() {
    for (let sub of this.subscriptions) {
      sub?.unsubscribe();
    }
  }
}
