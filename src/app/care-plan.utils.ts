import type { CarePlanItem, CareService } from './models';

export function addServiceToPlan(
  items: CarePlanItem[],
  service: CareService
): CarePlanItem[] {
  const existingItem = items.find((item) => item.service.id === service.id);

  if (!existingItem) {
    return [...items, { service, visits: 1 }];
  }

  return items.map((item) =>
    item.service.id === service.id
      ? { ...item, visits: item.visits + 1 }
      : item
  );
}

export function removeServiceFromPlan(
  items: CarePlanItem[],
  serviceId: number
): CarePlanItem[] {
  const existingItem = items.find((item) => item.service.id === serviceId);

  if (!existingItem) {
    return items;
  }

  if (existingItem.visits === 1) {
    return items.filter((item) => item.service.id !== serviceId);
  }

  return items.map((item) =>
    item.service.id === serviceId
      ? { ...item, visits: item.visits - 1 }
      : item
  );
}

export function getPlannedVisits(items: CarePlanItem[]): number {
  return items.reduce((total, item) => total + item.visits, 0);
}
