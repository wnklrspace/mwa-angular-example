import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import type { CareService } from '../models';

@Component({
  selector: 'app-care-catalog',
  standalone: true,
  templateUrl: './care-catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareCatalogComponent {
  readonly services = input.required<CareService[]>();
  readonly addService = output<CareService>();
}
