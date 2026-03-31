import type { CareService } from './models';

export const CARE_SERVICES: CareService[] = [
  {
    id: 1,
    name: 'Virtual GP follow-up',
    team: 'Family medicine',
    duration: '15 min',
    copay: 24,
    note: 'Medication check after discharge.',
  },
  {
    id: 2,
    name: 'Lab results review',
    team: 'Diagnostics',
    duration: '10 min',
    copay: 18,
    note: 'Quick clinician call to review markers.',
  },
  {
    id: 3,
    name: 'Physio progress visit',
    team: 'Rehab',
    duration: '30 min',
    copay: 42,
    note: 'Mobility and home-exercise adjustments.',
  },
];
