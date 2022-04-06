import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  @Output() celular = new EventEmitter<string>();
  phone = '';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onNumberPhone(event) {
    this.phone = event;
    this.celular.emit(event);
  }

  onSendNumberSelect(event){
    setTimeout(() => {
      this.router.navigate(['/code-confirmation/'+this.phone]);
    }, 500);
  }

}
