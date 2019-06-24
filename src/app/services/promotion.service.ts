import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';
import {Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  //created a method that return promotions mtlb promotions ki sari value getdishes may aa jayengi
  //getPromotions(): Promotion[] {
    //return PROMOTIONS;
 // }

 getPromotions(): Observable<Promotion[]>{
  return of(PROMOTIONS).pipe(delay(2000));
  }


  //for a specific promotion
  getPromotion(id: string): Observable<Promotion>
  {
    //ek particular promotion dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return of(PROMOTIONS.filter((promo) => (promo.id=== id))[0]).pipe(delay(2000));
}

  getFeaturedPromotion(): Observable<Promotion>
  {
    return of(PROMOTIONS.filter((promo) =>promo.featured)[0]).pipe(delay(2000));
}
}

