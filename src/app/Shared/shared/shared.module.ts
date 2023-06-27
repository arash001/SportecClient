import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/Modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
      ]

})
export class SharedModule { }
