import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 isLoading = false;

 constructor(public authService: AuthService) {

 }

 onRegister(form: NgForm) {
   if (form.invalid) {
     return;
   }
   this.isLoading = true;
   this.authService.register(form.value.email, form.value.password, form.value.name, form.value.password_confirm);
 }

}
