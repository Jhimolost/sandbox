import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  onSubmit(formInfo: NgForm): void {
    console.log('Submit happened', formInfo.form.getRawValue());
  }
}
