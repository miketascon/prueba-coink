import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firts-page',
  templateUrl: './firts-page.page.html',
  styleUrls: ['./firts-page.page.scss'],
})
export class FirtsPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('FirtsPagePage');
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
