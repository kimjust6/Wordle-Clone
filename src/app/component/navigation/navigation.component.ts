import { Component, OnInit } from '@angular/core';

import { EmitterService } from 'src/app/services/emitter.service';
import { gameNumber } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // the game/page that is selected
  gameNo: gameNumber = gameNumber.null;
  gameNumberType = gameNumber;
  constructor(private emitterService: EmitterService) {
    this.emitterService.pageNumberCtrlItem$.subscribe((res: gameNumber) => {
      this.gameNo = res;
      
    });
  }

  ngOnInit(): void {}
}
