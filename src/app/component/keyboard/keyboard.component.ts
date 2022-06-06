import { Component, OnInit } from '@angular/core';

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
      row: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<-BACK'],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  keyboardHandler(letter: string) {
    console.log(letter);
  }

  // getKey(val: string): string {
  //   let returnVal: string;
  //   if (val === 'ENTER') {
  //     returnVal = "nice";
  //   } else {
  //     returnVal = val;
  //   }
  //   return returnVal;
  // }

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
