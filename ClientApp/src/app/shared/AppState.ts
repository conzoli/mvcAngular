import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppState {

  public _subject = new Subject<boolean>();
  public event = this._subject.asObservable();

  public publish(data: boolean) {
    this._subject.next(data);
  }


}
