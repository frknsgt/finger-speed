import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getLocalStorageValues(objectName: string): any {
    return localStorage.getItem(objectName);
  }

  postLocalStorageValues(objectName: string, value: any): void {
    localStorage.setItem(objectName, value);
  }

  deleteLocalStorageValues(value: any): void {
    localStorage.removeItem(value);
  }
}
