import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeores(): Observable<Hero[]>  {
    this.messsageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messsageService: MessageService) { }
}
