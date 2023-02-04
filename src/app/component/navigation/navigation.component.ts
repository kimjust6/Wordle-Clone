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

  public theme: string;
  public themeInverse: string;
  public readonly darkIcon: string = 'dark_mode';
  public readonly lightIcon: string = 'light_mode';

  constructor(private emitterService: EmitterService) {
    this.subscriptions.push(
      this.emitterService.pageNumberCtrlItem$.subscribe((res: gameNumber) => {
        this.gameNo = res;
      })
    );
    // get theme
    this.theme =
      localStorage.getItem(this.LOCAL_STORAGE_THEME) ?? this.lightIcon;
    if (this.theme == this.lightIcon) {
      this.themeInverse = this.darkIcon;
    } else {
      this.themeInverse = this.lightIcon;
    }
    if (this.theme == this.darkIcon) {
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
    if (theme == this.lightIcon) {
      this.theme = this.darkIcon;
      this.themeInverse = this.lightIcon;
    } else {
      this.theme = this.lightIcon;
      this.themeInverse = this.darkIcon;
    }
    localStorage.setItem(this.LOCAL_STORAGE_THEME, this.theme);
    document.body.classList.toggle('dark-theme');
  }
}
