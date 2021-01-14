import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly url: string = 'http://localhost:3000/api';

  constructor() { }
}
