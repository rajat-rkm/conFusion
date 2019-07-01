import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import { map, catchError} from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient, private processHTTTPMsgService: ProcessHTTPMsgService) { }

  
//using only observable
getDishes(): Observable<Dish[]>
{
  //return of(DISHES).pipe(delay(2000)); during accessing data from local file
  return this.http.get<Dish[]>(baseURL + 'dishes')
  .pipe(catchError(this.processHTTTPMsgService.handleError));
}


  getDish(id: string): Observable<Dish>
  {
    return  this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHTTTPMsgService.handleError));
  }


getFeaturedDish(): Observable<Dish>
{
  return  this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
  .pipe(map(dishes => dishes[0]))
  .pipe(catchError(this.processHTTTPMsgService.handleError));
  }
  


getDishIds(): Observable<string[] | any> {
  return this.getDishes().pipe(map(dishes => dishes.map(dish=>dish.id)))
  .pipe(catchError(error => error));
}


// put method
putDish(dish:Dish): Observable<Dish>
{
  const httpOptions ={
 headers: new HttpHeaders({
   'Content-Type': 'application/json'
 })
  };


  return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
  .pipe(catchError(this.processHTTTPMsgService.handleError));
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


  