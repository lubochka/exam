import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular-test-app';
  options = ['One','Two','Tree']

  selectedValue(value:any)
  {
    console.log('onSelectionChange called', value);
  }

}
