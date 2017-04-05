import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SnippetFormComponent } from './components/snippet-form/snippet-form.component';
import { SnippetListComponent } from './components/snippet-list/snippet-list.component';
import { SnippetListItemComponent } from './components/snippet-list-item/snippet-list-item.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SnippetFormComponent,
    SnippetListComponent,
    SnippetListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
