import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//I am using the Material Design UI to help get the app up and running. Material Design requires you to import the
//specific modules and component you want to use. I want access to all of them so I created this custom module and
//imported everything and then exported the module into my app.module.ts file.

import {MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatInputModule,
        MatLineModule,
        MatListModule,
        MatOptionModule,
        MatPaginatorModule,
        MatPseudoCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatInputModule,
        MatLineModule,
        MatListModule,
        MatOptionModule,
        MatPaginatorModule,
        MatPseudoCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule
  ],
  exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCommonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatInputModule,
        MatLineModule,
        MatListModule,
        MatOptionModule,
        MatPaginatorModule,
        MatPseudoCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
