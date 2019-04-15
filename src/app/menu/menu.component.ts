import { Component, OnInit } from '@angular/core';

//jo class bnayi usko yaha import kiya
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //ek obj create kiya uss class k liye or aaray bnai to store the content
  dishes: Dish[] = DISHES;

  selectedDish:Dish;


  constructor() { }

  ngOnInit() {
  }

  onSelect(dish:Dish)
  {
    this.selectedDish = dish;
  }
}
