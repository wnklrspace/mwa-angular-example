import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import type { CarePlanItem } from '../models';

@Component({
  selector: 'app-care-plan',
  standalone: true,
  templateUrl: './care-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarePlanComponent {
  readonly items = input.required<CarePlanItem[]>();
  readonly removeService = output<number>();
}
