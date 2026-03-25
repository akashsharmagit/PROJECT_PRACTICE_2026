import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';   // ✅ add

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private http: HttpClient) {}   // ✅ inject

  registerObj: any = {
    fullName: "",
    email: "",
    password: "",
    collegeName: "",
    role: ""
  };

onRegister() {
  debugger;

  this.http.post(
    "https://api.freeprojectapi.com/api/ProjectCompetition/register",
    this.registerObj
  ).subscribe((res: any) => {
    debugger;
    alert("student registration success");
  }, (err) => {
    console.error(err);   // ✅ correct
    alert("API error");
  });

}
}