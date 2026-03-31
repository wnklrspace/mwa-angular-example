import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import { APP_CONTENT } from './app-content';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CARE_SERVICES } from './care-services.data';
import { CareCatalogComponent } from './care-catalog/care-catalog.component';
import { CarePlanComponent } from './care-plan/care-plan.component';
import { CarePlanStore } from './care-plan.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, CareCatalogComponent, CarePlanComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly appContent = APP_CONTENT;
  readonly careServices = CARE_SERVICES;
  readonly carePlanStore = inject(CarePlanStore);
  readonly items = this.carePlanStore.items;
  readonly plannedVisits = this.carePlanStore.plannedVisits;
}
