import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'editor', component: EditorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
