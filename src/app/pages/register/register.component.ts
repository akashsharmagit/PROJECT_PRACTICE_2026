import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  isLoading = false;
  
  registerObj: any = {
    "fullName": "",
    "email": "",
    "password": "",
    "collegeName": "",
    "role": ""
  }

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', this.registerObj);
     
      alert('Registration successful for: ' + this.registerObj.fullName);
    } else {
      console.log('Form is invalid');
    }
  }
  
  onRegister() {
    if (!this.registerObj.fullName || !this.registerObj.email || !this.registerObj.password || !this.registerObj.collegeName) {
      alert('Please fill all required fields');
      return;
    }

    this.isLoading = true;
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register", this.registerObj)
      .subscribe({
        next: (res: any) => {
          this.isLoading = false;
          alert('Student Registration Success!');
          this.resetForm();
        },
        error: (err: any) => {
          this.isLoading = false;
          console.error('Registration Error:', err);
          alert('Registration Failed: ' + (err.error?.message || 'Please try again'));
        }
      });
  }

  resetForm() {
    this.registerObj = {
      "fullName": "",
      "email": "",
      "password": "",
      "collegeName": "",
      "role": ""
    };
  }
 

}
