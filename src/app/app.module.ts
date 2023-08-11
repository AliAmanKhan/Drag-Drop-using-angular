import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ParentCardComponent } from './MyComponents/parent-card/parent-card.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './MyComponents/card/card.component';
import { DialogComponent } from './MyComponents/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    ParentCardComponent,
    CardComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
