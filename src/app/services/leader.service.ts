import { Injectable } from '@angular/core';
import { LEADER } from '../shared/leaders';
import { Leader } from '../shared/leader';
import {Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return of(LEADER).pipe(delay(2000));
  }


  //for a specific dish
  getLeader(id: string): Observable<Leader>
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return of(LEADER.filter((leader) => (leader.id=== id))[0]).pipe(delay(2000));
    }
  

  getFeaturedLeader():Observable<Leader>
  {
    return of(LEADER.filter((leader) =>leader.featured)[0]).pipe(delay(2000));
  }

}