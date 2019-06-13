import { Injectable } from '@angular/core';
import { LEADER } from '../shared/leaders';
import { Leader } from '../shared/leader';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADER;
  }

  //for a specific dish
  getLeader(id: string): Leader
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return LEADER.filter((leader) => (leader.id=== id))[0];
  }

  getFeaturedLeader(): Leader
  {
    return LEADER.filter((leader) =>leader.featured)[0];
  }
}
