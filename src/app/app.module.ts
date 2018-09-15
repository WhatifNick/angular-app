import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { UiModule } from './ui/ui.module';
import { CalendarComponent } from './calendar/calendar.component';
import { EditorComponent } from './editor/editor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    CalendarComponent,
    EditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
