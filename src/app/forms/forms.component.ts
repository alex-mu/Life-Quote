import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  
  submit(formsForm: any){
    console.log("Form Submitted",formsForm)
  }
}
function formsForm(arg0: string, formsForm: any) {
  throw new Error('Function not implemented.');
}

