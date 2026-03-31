export interface CareService {
  id: number;
  name: string;
  team: string;
  duration: string;
  copay: number;
  note: string;
}

export interface CarePlanItem {
  service: CareService;
  visits: number;
}
