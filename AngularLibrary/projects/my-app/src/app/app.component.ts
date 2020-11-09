import { Component } from '@angular/core';
import { MyFirstLibraryService } from 'my-first-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private _myApiService: MyFirstLibraryService) {
    let m = _myApiService.sum(3, 4);
  }
}
