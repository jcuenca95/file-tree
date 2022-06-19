import { InjectionToken } from '@angular/core';
import { ViewerComponent } from '../features/file-hierarchy/classes/viewer-component.class';

export const ViewerComponentMap = new InjectionToken<
  Record<string, ViewerComponent>
>('ViewerComponentMap');
