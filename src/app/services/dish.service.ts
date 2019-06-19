import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //created a method that return dishes mtlb dishes ki sari value getdishes may aa jayengi
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  //for a specific dish
  getDish(id: string): Promise<Dish>
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return  Promise.resolve(DISHES.filter((dish) => (dish.id=== id))[0]);
  }

  getFeaturedDish(): Promise<Dish>
  {
    return  Promise.resolve(DISHES.filter((dish) =>dish.featured)[0]);
  }
}
