import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  keyboardArray = [
    {
      row: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    },
    {
      row: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    },
    {
      row: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<- BACK'],
    },
  ];
  constructor(private emitterService: EmitterService) {}

  ngOnInit(): void {}

  keyboardHandler(letter: string) {
    // emit the letter to be handle on subscribe
    this.emitterService.loadKeyStrokeCtrl(letter);
  }

  // method that returns whether or the keyboard is even or odd
  getRowStyle(rowNum: number): string {
    let returnVal: string;
    if (rowNum % 2) {
      returnVal = 'oddKeyboard';
    } else {
      returnVal = 'evenKeyboard';
    }
    return returnVal;
  }
}
