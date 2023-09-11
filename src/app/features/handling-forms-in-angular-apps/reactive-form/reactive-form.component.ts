import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      // name: ['', [Validators.required, this.customValidator.bind(this)]],
      name: ['', [Validators.required], this.customAsyncValidator.bind(this)],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male'],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        zip: []
      }),
      hobbies: this.formBuilder.array([])
    });

    this.myForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      }
    })

    this.myForm.statusChanges.subscribe({
      next: (status) => {
        console.log(status);
      }
    })
  }

  get nameControl() {
    return this.myForm.get('name');
  }

  get emailControl() {
    return this.myForm.get('email');
  }

  get hobbiesControl() {
    return this.myForm.get('hobbies') as FormArray;
  }

  addHobbie() {
    this.hobbiesControl.push(this.formBuilder.control(''));
  }

  // Custom Validator Function
  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Perform custom validation logic
    if (value && !value.includes('user')) {
      return { customError: true };
    }
    return null;
  }

  customAsyncValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // Perform asynchronous validation logic
      // Resolve with validation errors or null
      setTimeout(() => {
        if (control.value && !control.value.includes('user')) {
          resolve({ customError: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

}
