import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { Comment } from '../shared/comment'



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

   //comment variable
   commentForm: FormGroup;
   comment:Comment;

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  @ViewChild('cform') commentFormDirective;


  formError = {
    'author': '',
    'comment': ''
};
validationMessages = {
  'author': {
    'required': 'first name is required.',
    'minlength': 'first name be at least 2 characters long',
    'maxlength': 'first name can not be  more than  25 characters long'
  },
  'comment': {
   'required': 'comment is required.',
   'minlength': 'comment must be at least 2 characters long'
  }
};

  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private location: Location,
    private cs: FormBuilder,
    @Inject('BaseURL') private BaseURL) 
  { 
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds);

    this.route.params
    .pipe(switchMap((params:Params)=> this.dishService.getDish(params['id'])))
    .subscribe((dish)=> { 
      this.dish=dish;
         this.setPrevNext(dish.id);
    });
  }

  setPrevNext(dishId: string)
  {
    const index =this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];

  }

  goBack(): void {
     this.location.back();
  }
  

  createForm()
  {
    this.commentForm = this.cs.group({
      author:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment:['',[Validators.required, Validators.minLength(2)]],
      rating: 5
    });
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));


    this.onValueChanged();
  }

  onValueChanged(data?: any) 
  {
  if(!this.commentForm)
  {
    return;
  }
  const form = this.commentForm;
  for(const field in this.formError)
  {
    if (this.formError.hasOwnProperty(field)){
      //clear previous error message(if any)
      this.formError[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid)
      {
        const messages = this.validationMessages[field];
        for (const key in control.errors)
        {
          if(control.errors.hasOwnProperty(key))
            this.formError[field] +=messages[key] + ' ';
        }
      }
    }
  }
  this.comment=form.value;
  }



  onSubmit(){
    this.comment=this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.comment=null;
    this.commentForm.reset(
      {
        author:'',
        comment:'',
        rating: 5
      }
    );
    this.commentFormDirective.resetForm();
  }

}

