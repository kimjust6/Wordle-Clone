import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  private keyStrokeCtrl = new Subject();
  // subscribe to this item to see when keyStrokeCtrl changes
  public keyStrokeCtrlItem$ = this.keyStrokeCtrl.asObservable();
  constructor() {}

  public loadKeyStrokeCtrl(nextKeyStroke: string) {
    // call this method to change keyStroke
    this.keyStrokeCtrl.next(nextKeyStroke);
  }
}
