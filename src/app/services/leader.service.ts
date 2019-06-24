import { Injectable } from '@angular/core';
import { LEADER } from '../shared/leaders';
import { Leader } from '../shared/leader';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER),2000);
  });
}

  //for a specific dish
  getLeader(id: string): Promise<Leader>
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader) => (leader.id=== id))[0]),2000);
    });
  }

  getFeaturedLeader(): Promise<Leader>
  {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADER.filter((leader) =>leader.featured)[0]),2000);
  });
}
}