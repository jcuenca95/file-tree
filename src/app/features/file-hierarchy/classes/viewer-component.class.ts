import { Observable } from 'rxjs';

export class ViewerComponent {
  file: File | undefined;
  fileData$ = new Observable((subscribe) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      subscribe.next(e.target?.result as string);
    };
    reader.readAsDataURL(this.file as Blob);
  });
}
