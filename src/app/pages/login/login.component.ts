import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // ✅ import router
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']   // ✅ fixed
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  onlogin() {
    const formValue = this.loginForm.value;

    this.userService.onUserLogin(formValue).subscribe({
      next: (res: any) => {

        // ✅ make sure API key matches
        localStorage.setItem("studentID", res.userId);

        this.userService.loggedUserId = res.userId;

        this.router.navigateByUrl('/home');

        alert("User found ✅");
      },
      error: () => {
        alert("Wrong Credentials ❌");
      }
    });
  }
}