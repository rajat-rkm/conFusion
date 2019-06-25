import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  
//using only observable
getDishes(): Observable<Dish[]>
{
  return of(DISHES).pipe(delay(2000));
}


  getDish(id: string): Observable<Dish>
  {
    return of(DISHES.filter((dish) => (dish.id=== id))[0]).pipe(delay(2000));
  }


getFeaturedDish(): Observable<Dish>
{
  return of(DISHES.filter((dish) =>dish.featured)[0]).pipe(delay(2000));
  }
  


getDishIds(): Observable<string[] | any> {
  return of (DISHES.map(dish =>dish.id));
}

}

  //created a method that return dishes mtlb dishes ki sari value getdishes may aa jayengi
 //1promise with delay
  //getDishes(): Promise<Dish[]> {
  //  return new Promise(resolve =>{
      // Simulate server latency with 2 second delay
   //   setTimeout(()=> resolve(DISHES),2000);//promise will resolve after 2 sec delay
  //  });
 // }

  //2for a specific dish
  //3promise with immediate result
  //getDish(id: string): Promise<Dish>
  //{
    //ek particular dish ko pick krega id k basis pr usko ek aaray mai place krega uss aaray se fer extract krega (that's why [0])
   // return  Promise.resolve(DISHES.filter((dish) => (dish.id=== id))[0]);
//  }

 //using obseravable with promise

 //getDishes(): Promise<Dish[]>
 //{
//   return of(DISHES).pipe(delay(2000)).toPromise();//method is ready to return dishes by using obseravvle by converting it to promise
//}


  