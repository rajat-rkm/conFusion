import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion: Promotion;
  leader: Leader;
  
  constructor(private dishService: DishService,
    private promotionService: PromotionService ,private leaderService: LeaderService) { }

  ngOnInit() {
     this.dishService.getFeaturedDish()
     .then((dish)=>this.dish=dish);//when we use promises
    this.promotion = this.promotionService.getFeaturedPromotion();//when we use services
    this.leader = this.leaderService.getFeaturedLeader();

  }

}
