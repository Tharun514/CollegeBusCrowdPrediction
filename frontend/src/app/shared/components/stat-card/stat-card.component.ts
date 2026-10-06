import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {

  @Input() title = '';

  @Input() value: number | string = 0;

  @Input() icon = 'bi bi-grid';

  @Input() color: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'cyan' = 'blue';

  @Input() subtitle = '';

  @Input() loading = false;

}