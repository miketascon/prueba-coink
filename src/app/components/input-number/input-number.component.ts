import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class InputNumberComponent implements OnInit {

  @Input() numberView: string = '';
  @Input() typePlaceholder: string = '';
  placeholder: string = ''

  constructor() { }

  ngOnInit() {
    console.log(this.numberView);
    if(this.typePlaceholder === 'phone'){
      this.placeholder = '(xxx) xxxxxxx';
    } else {
      this.placeholder = 'xxxx';
    }

  }

  onInput($event:any) {
    let theEvent = $event;
        const key = theEvent.target.value,
        regex = /[0-9]+/g;
    if( !regex.test(key) ) {
      let resp = $event.target.value.match(regex);
      $event.target.value = resp ? resp.join('')  : '';
    }
   }

}
