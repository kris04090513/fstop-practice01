import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
 @Input() title: string = "臺幣帳戶";
  eyeOpen = { open: false, close: true }; //眼睛開關

  constructor() { }

  ngOnInit(): void {
  }
  eyeChange(): void {
    this.eyeOpen.open = !this.eyeOpen.open;
    this.eyeOpen.close = !this.eyeOpen.close;
  }
}
