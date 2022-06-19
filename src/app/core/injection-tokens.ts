import { InjectionToken } from '@angular/core';
import { ViewerComponent } from '../features/file-hierachy/interfaces/viewer-component.interface';

export const ViewerComponentMap = new InjectionToken<
  Record<string, ViewerComponent>
>('ViewerComponentMap');
