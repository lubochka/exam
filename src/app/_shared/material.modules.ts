import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AutoCompleteComponent} from './material/auto-complete/auto-complete.component';

import { CommonModule } from '@angular/common'
@NgModule({
  declarations: [
    AutoCompleteComponent
  ],
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    AutoCompleteComponent,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
