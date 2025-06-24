import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListWithStorageService {
  localStorageCache$ = new BehaviorSubject<Map<string, string>>(this.mapValuesFromLS());

  constructor() {
  }

  public add(key: string, value: string): boolean {
    if(localStorage.getItem(key) === null) {
      localStorage.setItem(key, value);
      this.addOrUpdateCache(key, value);

      return true;
    }

    return false;
  }

  public update(key: string, value: string): string | null {
    console.log(key, value)
    if(localStorage.getItem(key) !== null) {
      localStorage.setItem(key, value);
      this.addOrUpdateCache(key, value);

      console.log(key, value)
      return value;
    }

    return null;
  }

  public remove(key: string): string | null {
    const value = localStorage.getItem(key);

    if(value !== null) {
      localStorage.removeItem(key);
      this.removeFromCache(key);

      return value;
    }

    return null;
  }

  public list(): Observable<Map<string, string>> {
    return this.localStorageCache$.asObservable();
  }

  public get(key: string): string | null {
    const value = localStorage.getItem(key);

    return value !== null ? value : null;
  }

  private addOrUpdateCache(key: string, value: string): void {
    const map = this.getCachedData();

    map.set(key, value);

    this.localStorageCache$.next(map);
  }

  private removeFromCache(key: string): void {
    const map = this.getCachedData();

    map.delete(key);

    this.localStorageCache$.next(map);
  }

  private getCachedData(): Map<string, string> {
    return this.localStorageCache$.value;
  }

  private mapValuesFromLS(): Map<string, string> {
    const map = new Map<string, string>();

    for(let i =0; i< localStorage.length; i++) {
      const key = localStorage.key(i);

      if(key) {
        const value = localStorage.getItem(key);
        map.set(key, value!);
      }
    }

    return map;
  }
}
