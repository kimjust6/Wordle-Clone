import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  // so that gameNumber can be accessible in html
  gameNumberType = gameNumber;
  // the array of subscriptions
  subscriptions: Subscription[] = [];

  private readonly LOCAL_STORAGE_THEME: string = 'theme';

  theme: string;
  constructor(private emitterService: EmitterService) {
    this.subscriptions.push(
      this.emitterService.pageNumberCtrlItem$.subscribe((res: gameNumber) => {
        this.gameNo = res;
      })
    );
    // get theme
    this.theme = localStorage.getItem(this.LOCAL_STORAGE_THEME) ?? 'light_mode';
    if (this.theme == 'dark_mode') {
      document.body.classList.toggle('dark-theme');
    }
  }

  ngOnInit() {}
  ngOnDestroy() {
    // unsubscribe to subscriptions
    for (let sub of this.subscriptions) {
      sub?.unsubscribe();
    }
  }

  changeTheme(theme: string) {
    if (theme == 'light_mode') {
      this.theme = 'dark_mode';
    } else {
      this.theme = 'light_mode';
    }
    localStorage.setItem(this.LOCAL_STORAGE_THEME, this.theme);
    document.body.classList.toggle('dark-theme');
  }
}
