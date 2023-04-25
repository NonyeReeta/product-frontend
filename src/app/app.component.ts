import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'product-frontend';
  showApprove: boolean = true;
  showApproved: boolean = false;

  toggleApproved() {
    this.showApproved = true;
    this.showApprove = false;
  }
  toggleApprove() {
    this.showApproved = false;
    this.showApprove = true;
  }
}
