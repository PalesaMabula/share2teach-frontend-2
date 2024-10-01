import { AbstractControl, ValidationErrors,ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control:AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confimPassword = control.get('confirmPassword');

  if(!password || !confimPassword){
    return null;

  }
  return password.value ===confimPassword.value? null:{passwordMismatch: true}
} 