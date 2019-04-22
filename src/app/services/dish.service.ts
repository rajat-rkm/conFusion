import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //created a method that return dishes mtlb dishes ki sari value getdishes may aa jayengi
  getDishes(): Dish[] {
    return DISHES
  }

  //for a specific dish
  getDish(id: string): Dish
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return DISHES.filter((dish) => (dish.id=== id))[0];
  }

  getFeaturedDish(): Dish
  {
    return DISHES.filter((dish) =>dish.featured)[0];
  }
}
