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
    return new Promise(resolve =>{
      // Simulate server latency with 2 second delay
      setTimeout(()=> resolve(DISHES),2000);//promise will resolve after 2 sec delay
    });
  }

  //for a specific dish
  //promise with immediate result
  //getDish(id: string): Promise<Dish>
  //{
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
   // return  Promise.resolve(DISHES.filter((dish) => (dish.id=== id))[0]);
//  }

getDish(id: string): Promise<Dish>
  {
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
    return  new Promise(resolve =>{
      setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id=== id))[0]),2000);
  });
}

  getFeaturedDish(): Promise<Dish>
  {
    return new Promise(resolve => {
      setTimeout(() => resolve( DISHES.filter((dish) =>dish.featured)[0]),2000);
    });
    
  }
}
