import { Injectable, computed, signal } from '@angular/core';

import {
  addServiceToPlan,
  getPlannedVisits,
  removeServiceFromPlan,
} from './care-plan.utils';
import type { CarePlanItem, CareService } from './models';

@Injectable({ providedIn: 'root' })
export class CarePlanStore {
  private readonly state = signal<CarePlanItem[]>([]);

  readonly items = this.state.asReadonly();
  readonly plannedVisits = computed(() => getPlannedVisits(this.state()));

  addService(service: CareService): void {
    this.state.update((currentItems) => addServiceToPlan(currentItems, service));
  }

  removeService(serviceId: number): void {
    this.state.update((currentItems) =>
      removeServiceFromPlan(currentItems, serviceId)
    );
  }
}
