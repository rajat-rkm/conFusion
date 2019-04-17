import { Component, OnInit } from '@angular/core';

//jo class bnayi usko yaha import kiya
import { Dish } from '../shared/dish';

//used for data binding
//import { DISHES } from '../shared/dishes';

//if using services import the service
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //ek obj create kiya uss class k liye or aaray bnai to store the content dishes ka

  //now since we are fwtching info using services we do not need this constant
  //dishes: Dish[] = DISHES;

  //for services this show that dishes is a variable that is of Dish array type
  dishes: Dish[];

  selectedDish:Dish;


  //created a variable of dishservice type 
  constructor(private dishService: DishService) { }

  ngOnInit() {

    //dishes variable mai dishservice jo dish le rha hai getdishes method se woh assign ho rhi hai
    this.dishes =this.dishService.getDishes();
  }

  onSelect(dish:Dish)
  {
    this.selectedDish = dish;
  }
}
