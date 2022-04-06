import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  checked = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['home']);
  }

}
