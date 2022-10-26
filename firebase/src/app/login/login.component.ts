import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  activeTab = 'login';
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  login(): void {
    this.authService.signIn(this.email, this.password).then(res => {
      this.authService.getAuthState().subscribe(user => {
        if (user) {
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigate(['upload']);
        }
      });
    });
  }

  register(): void {
    this.authService.signUp(this.email, this.password).then(res => {
      this.authService.setUserData(res.user, this.fullName).then(result => {
        this.fullName = "";
        this.email = "";
        this.confirmPassword = "";
        this.password = "";
        alert("User registered successfully");
      });
    });
  }
}
