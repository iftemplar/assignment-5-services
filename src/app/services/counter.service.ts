import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = {
    usersMadeActive : 0,
    usersMadeInactive : 0
  };

  constructor() { }
}
