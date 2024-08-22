import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DigitComponent } from '../digit/digit.component';
import { DelimiterDotsComponent } from '../delimiter-dots/delimiter-dots.component';
import { AmpmComponent } from '../ampm/ampm.component';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DigitComponent, DelimiterDotsComponent, DatePipe, AmpmComponent],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit {
  @Input() hourFormat: "h" | "hh" | "H" | "HH" = "h";
  @Input() minutesFormat: "m" | "mm" = "mm"
  @Input() ampmFormat: boolean = true;
  
  hour = "0";
  minutes = "0";
  seconds = "0";
  ampm = "na";

  interval: any;

  constructor(private datePipe: DatePipe)
  {
  }

  ngOnInit(): void 
  {
    this.interval = setInterval(() => {
      let tempDate = new Date();
      let time = this.datePipe.transform(tempDate, `${this.hourFormat}:${this.minutesFormat}:ss${this.ampmFormat ? ' a' : ''}`) ?? "";
      this.assignTime(time);
    }, 1000);
  }

  assignTime(time: string): void
  {
    console.log(time);
    let splitTime = time.split(":");
    this.hour = splitTime[0];
    if(this.hourFormat === 'h' || this.hourFormat === 'H') // add 'empty' digit
    {
      this.hour = "N" + this.hour;
    }

    this.minutes = splitTime[1];
    if(this.minutesFormat === 'm') // add 'empty' digit
    {
      this.minutes = "N" + this.minutes;
    }

    this.seconds = splitTime[2];
    if(this.ampmFormat)
    {
      this.ampm = time.split(" ")[1];
    }
  }
}
