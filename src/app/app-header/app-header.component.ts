import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './app-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  readonly frameworkLabel = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly patientName = input.required<string>();
  readonly selectedServicesCount = input.required<number>();
  readonly plannedVisits = input.required<number>();
}
