import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class MobileViewService {
  public isMobileView: boolean = window.innerWidth < Constants.MOBILE_VIEW_BP;
  constructor() {
    window.onresize = () => {
      this.isMobileView = window.innerWidth < Constants.MOBILE_VIEW_BP;
    };
  }
}
