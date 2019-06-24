import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  //created a method that return promotions mtlb promotions ki sari value getdishes may aa jayengi
  //getPromotions(): Promotion[] {
    //return PROMOTIONS;
 // }

 getPromotions(): Promise<Promotion[]>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(PROMOTIONS),2000);
  });
}

  //for a specific promotion
  getPromotion(id: string): Promise<Promotion>
  {
    //ek particular promotion dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return new Promise(resolve =>{
      setTimeout(()=>resolve(PROMOTIONS.filter((promo) => (promo.id=== id))[0]),2000);
  });
}

  getFeaturedPromotion(): Promise<Promotion>
  {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(PROMOTIONS.filter((promo) =>promo.featured)[0]),2000);
  });
}
}

