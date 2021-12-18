import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <body>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'africanbootcamp';

}
