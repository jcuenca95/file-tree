import { Inject, Injectable } from '@angular/core';
import { ViewerComponent } from '../../../classes/viewer-component.class';
import { ViewerComponentMap } from '../../../../../core/injection-tokens';
import { DefaultViewerComponent } from '../default-viewer/default-viewer.component';

@Injectable({
  providedIn: 'root',
})
export class ViewerComponentFactoryService {
  constructor(
    @Inject(ViewerComponentMap)
    private componentMap: Record<string, ViewerComponent>
  ) {}

  getComponent(fileExt: string): ViewerComponent {
    return this.componentMap[fileExt] || DefaultViewerComponent;
  }
}
