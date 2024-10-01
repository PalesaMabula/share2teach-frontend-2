import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormBuilder, Validators, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../Shared/password-match.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule,ButtonModule,InputTextModule, ReactiveFormsModule,CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },  {
      Validator: this.passwordMatchValidator
   });
   
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null 
      : { passwordMismatch: true };
  }

  ngOnInit() {
    // Any additional initialization if needed 
  }
  get fullname() {
    return this. registerForm.controls['email'];
  }
  get email() {
    return this. registerForm.controls['email'];
  }

  get password(){
    return this. registerForm.controls['password'];

  }
  get confirmPassword() {
    return this. registerForm.controls['email'];
  }
}
