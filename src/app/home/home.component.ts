import { Component, OnInit,Inject } from '@angular/core';
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
  dishErrMess: string;
  promotion: Promotion;
  leader: Leader;
  
  constructor(private dishService: DishService,
    private promotionService: PromotionService ,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
     this.dishService.getFeaturedDish()
     .subscribe((dish)=>this.dish=dish,
     errmess => this.dishErrMess= <any>errmess );//when we use promises

   // this.promotion = this.promotionService.getFeaturedPromotion();//when we use services
   this.promotionService.getFeaturedPromotion()
   .subscribe((promotion)=>this.promotion=promotion);

   // this.leader = this.leaderService.getFeaturedLeader(); for service
     //by using promise
     this.leaderService.getFeaturedLeader()
     .subscribe((leader)=>this.leader=leader);
  }

}
