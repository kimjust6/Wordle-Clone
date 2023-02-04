import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly LOCAL_STORAGE_ARRAY: string = 'arrays';
  private readonly LOCAL_STORAGE_WORDLE_ANSWER: string = 'wordleAnswer';
  private readonly LOCAL_STORAGE_GAME_STATE: string = 'gameState';
  private readonly LOCAL_STORAGE_STATS: string = 'stats';
  private EMIT_VALUE: Number = 0;

  constructor() {}
  /**
   * @name clearLocalStorage
   * @description handles clearing all the local storage
   */
  clearLocalStorage() {
    localStorage.removeItem(this.getLSArray());
    localStorage.removeItem(this.getLSWordleAnswer());
    localStorage.clear();
  }

  setEmitValue(value: Number) {
    this.EMIT_VALUE = value;
  }

  getEmitValue() {
    return this.EMIT_VALUE;
  }

  getLSArray() {
    return this.getEmitValue() + this.LOCAL_STORAGE_ARRAY;
  }

  getLSWordleAnswer() {
    return this.getEmitValue() + this.LOCAL_STORAGE_WORDLE_ANSWER;
  }
  getLSGameState() {
    return this.getEmitValue() + this.LOCAL_STORAGE_GAME_STATE;
  }

  getLSStats() {
    return this.getEmitValue() + this.LOCAL_STORAGE_STATS;
  }
}
