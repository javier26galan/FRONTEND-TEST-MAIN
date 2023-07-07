import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getNumbers(): Observable<number> {
    return interval(1000).pipe(map(() => Math.floor(Math.random() * 11)));
  }
}
