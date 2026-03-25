import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],  // ✅ CommonModule जरूरी
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userService = inject(UserService);
  router = inject(Router);

  ngOnInit() {
    const id = localStorage.getItem("studentID");
    if (id) {
      this.userService.loggedUserId = +id;
    }
  }

  isLoggedIn(): boolean {
    return this.userService.loggedUserId !== null;
  }

  onLogoff() {
    localStorage.removeItem("studentID");
    this.userService.loggedUserId = null;
    this.router.navigateByUrl('/home');
  }
}