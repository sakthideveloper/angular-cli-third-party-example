import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'How to Add Third-Party Library in Angular CLI';

  ngOnInit() {
    console.log('Is the title empty?', this.isEmpty(this.title));
  }

  private isEmpty(value: any): boolean {
    return _.isEmpty(value);
  }
}
