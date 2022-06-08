import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { CommonService } from 'src/app/services/common.service';
import { kbCorrectness } from 'src/app/utilities/interfaces';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  public keyboardArray = [
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

  public styleArray: any = {};
  constructor(
    private emitterService: EmitterService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.emitterService.KBCorrectnessCtrlItem$.subscribe(
      (kbCor: kbCorrectness) => {
        this.styleArray[kbCor.letter] = this.commonService.correctnessToString(
          kbCor.correctness
        );
      }
    );
  }

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
