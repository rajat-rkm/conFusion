import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { Feedback,ContactType } from '../shared/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;


  formError = {
     'firstname': '',
     'lastname':  '',
     'telnum':  '',
     'email': ''
};

validationMessages = {
     'firstname': {
       'required': 'frist name is required.',
       'minlength': 'first name be at least 2 characters long',
       'maxlength': 'first name can not be  more than  25 characters long'
     },
     'lastname': {
      'required': 'last name is required.',
      'minlength': 'last name be at least 2 characters long',
      'maxlength': 'last name can not be  more than  25 characters long'
    },
    'telnum': {
      'required': 'tel. number is required.',
      'pattern': 'tel number must contain only number.'
    },

    'email': {
      'required': 'email is required.',
      'email': 'email not in vaild format.'
    }
};

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm()
  {
    this.feedbackForm = this.fb.group({
      firstname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum:[0,[Validators.required, Validators.pattern]],
      email:['',[Validators.required,Validators.email]],
      agree:false,
      contacttype:'None',
      message:''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));


      this.onValueChanged(); //reset form validation messages
  }
  
  onValueChanged(data?: any) {
    if(!this.feedbackForm)
    {
      return;
    }
    const form = this.feedbackForm;
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
  }


  onSubmit(){
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset(
      {
        firstname:'',
        lastname:'',
        telnum:0,
        email:'',
        agree:false,
        contacttype:'None',
        message:''
      }
    );
    this.feedbackFormDirective.resetForm();
  }

}
