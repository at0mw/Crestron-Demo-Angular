import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private selectedDestinationSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selectedDestination$: Observable<string> = this.selectedDestinationSubject.asObservable();

  setSelectedDestination(destination: string): void {
    console.log("Setting Selected Destination");
    this.selectedDestinationSubject.next(destination);
  }

  getSelectedDestination(): string {
    return this.selectedDestinationSubject.value;
  }
}