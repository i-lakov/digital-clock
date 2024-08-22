import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digit',
  standalone: true,
  imports: [],
  templateUrl: './digit.component.html',
  styleUrl: './digit.component.scss'
})
export class DigitComponent {
  @Input() displayDigit = "10";

  segmentDefinition: any = {
    //  TOP LEFTUP LEFTDN  MID RGHTUP RGHTDN BOTTOM
    "N": [false, false, false, false, false, false, false], // Empty digit
    "0": [true, true, true, false, true, true, true],
    "1": [false, false, false, false, true, true, false],
    "2": [true, false, true, true, true, false, true],
    "3": [true, false, false, true, true, true, true],
    "4": [false, true, false, true, true, true, false],
    "5": [true, true, false, true, false, true, true],
    "6": [true, true, true, true, false, true, true],
    "7": [true, false, false, false, true, true, false],
    "8": [true, true, true, true, true, true, true],
    "9": [true, true, false, true, true, true, true],
    "E": [true, true, true, true, false, false, true], // "Error" digit
  };

  getIsSegmentOn(index: number): string
  {
    return this.segmentDefinition[this.displayDigit][index] ? "on" : "";
  }
}
