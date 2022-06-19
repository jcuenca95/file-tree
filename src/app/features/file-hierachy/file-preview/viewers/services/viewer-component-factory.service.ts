import { Inject, Injectable, Type } from '@angular/core';
import { ViewerComponent } from '../../../interfaces/viewer-component.interface';
import { ViewerComponentMap } from '../../../../../core/injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class ViewerComponentFactoryService {
  constructor(
    @Inject(ViewerComponentMap)
    private componentMap: Record<string, ViewerComponent>
  ) {}

  getComponent(fileExt: string): ViewerComponent {
    return this.componentMap[fileExt];
  }
}
