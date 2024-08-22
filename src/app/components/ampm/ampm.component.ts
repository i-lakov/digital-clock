import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ampm',
  standalone: true,
  imports: [],
  templateUrl: './ampm.component.html',
  styleUrl: './ampm.component.scss'
})
export class AmpmComponent {
  @Input() display: string = 'na';

  shouldShowAM(): boolean
  {
    return this.display === 'AM';
  }

  shouldShowPM(): boolean
  {
    return this.display === 'PM';
  }
}
