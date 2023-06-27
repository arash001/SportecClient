import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonToggleGroup, MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatNativeDateModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const matrialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatBadgeModule,

  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [],
  imports: [
    matrialComponents
  ],
  exports: [matrialComponents]
})
export class MaterialModule { }
