import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../modules/auth/sevices/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authSetvice: AuthService) { }

  ngOnInit() {
  }

  checkAuthorization() {
    return this.authSetvice.checkAuth()
  }

  onLogout() {
    this.authSetvice.logOut();
  }
}
