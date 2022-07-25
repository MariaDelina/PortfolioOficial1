import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  isLogout = false;
  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogout = true;
    } else {
      this.isLogout = false;
    }
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
