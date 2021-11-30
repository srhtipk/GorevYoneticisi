import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirisEkraniComponent } from './components/giris-ekrani/giris-ekrani.component';
import { GorevlerComponent } from './components/gorevler/gorevler.component';
import { CategoryComponent } from './components/category/category.component';
import { TodoAddUpdateComponent } from './components/todo-add-update/todo-add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    GirisEkraniComponent,
    GorevlerComponent,
    CategoryComponent,
    TodoAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
