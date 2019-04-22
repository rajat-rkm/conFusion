import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  //created a method that return promotions mtlb promotions ki sari value getdishes may aa jayengi
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  //for a specific promotion
  getPromotion(id: string): Promotion
  {
    //ek particular promotion dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return PROMOTIONS.filter((promo) => (promo.id=== id))[0];
  }

  getFeaturedPromotion(): Promotion
  {
    return PROMOTIONS.filter((promo) =>promo.featured)[0];
  }
}

