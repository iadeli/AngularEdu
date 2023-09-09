import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    name: '',
    email: '',
    gender: '',
    address: {
      street: '',
      city: '',
      zip: ''
    }
  };

  suggestUser() {
    // this.myForm.setValue({
    //   name: 'bijan',
    //   email: 'bijan@bijan',
    //   gender: 'male',
    //   address: {
    //     street: 'tehran',
    //     city: 'tehran',
    //     zip: '123'
    //   }
    // });
    this.myForm.form.patchValue({
      name: 'bijan'
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.myForm);
    if (form.valid) {
      console.log('Form submitted!', this.formData);
      // Perform further actions with the form data
    }
  }

  resetForm(){
    this.myForm.reset();
  }

}
