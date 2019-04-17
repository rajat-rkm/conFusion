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
}
