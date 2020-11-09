import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstLibraryService {

  constructor() { }

  public sum(a: number, b: number) { return a - b; }
}
