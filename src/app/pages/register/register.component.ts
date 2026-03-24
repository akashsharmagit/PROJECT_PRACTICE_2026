import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerObj: any = {
    "fullName": "",
    "email": "",
    "password": "",
    "collegeName": "",
    "role": ""
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', this.registerObj);
     
      alert('Registration successful for: ' + this.registerObj.fullName);
    } else {
      console.log('Form is invalid');
    }
  }
}
