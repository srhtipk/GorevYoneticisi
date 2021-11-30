import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisEkraniComponent } from './components/giris-ekrani/giris-ekrani.component';
import { GorevlerComponent } from './components/gorevler/gorevler.component';
import { TodoAddUpdateComponent } from './components/todo-add-update/todo-add-update.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:GirisEkraniComponent},
  {path:"todos",component:GorevlerComponent},
  {path:"todos/category/:categoryId",component:GorevlerComponent},
  {path:"todos/addupdate",component:TodoAddUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
