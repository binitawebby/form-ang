import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { PracticeComponent } from './practice/practice.component';
import { DialogEgComponent } from './dialog-eg/dialog-eg.component';
import {MatIconModule} from '@angular/material/icon';
import { PracComponent } from './prac/prac.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    DialogEgComponent,
    PracComponent
  ],
  entryComponents:[DialogEgComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,MatIconModule
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}
