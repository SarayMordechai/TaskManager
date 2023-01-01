import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new_project';
  menuFlag: any;

  ngOnInit() {
    this.menuFlag = true;

  }
  show_menu() {
    this.menuFlag = true;
  }
  hide_menu() {
    this.menuFlag = false;
  }
}
