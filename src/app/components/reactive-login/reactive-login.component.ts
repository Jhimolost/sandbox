import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  standalone: false,
  templateUrl: './reactive-login.component.html',
  styleUrl: './reactive-login.component.scss'
})
export class ReactiveLoginComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), this.passwordStrengthValidator()]],
      list: this.fb.array(['hello', 'hello2', 'hello3'])
    });
  }

  onSubmit(): void {
    console.log(this.form.getRawValue());
  }

  get list(): FormArray {
    return this.form.get('list') as FormArray;
  }

  private passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? { passwordStrength: true }: null;
    }
  }
}
