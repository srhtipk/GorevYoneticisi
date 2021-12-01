import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.component.html',
  styleUrls: ['./todo-add-update.component.css']
})
export class TodoAddUpdateComponent implements OnInit {
  todoAddForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private todoService:TodoService
    ) { }

  ngOnInit(): void {
    this.createtodoAddForm();
  }

  createtodoAddForm(){
    this.todoAddForm=this.formBuilder.group({
      todoName:["",Validators.required],
      categoryId:["",Validators.required],
      isCompleted:["false"]
    })
  }

  add(){
    if (this.todoAddForm.valid) {
      let todoModel=Object.assign({},this.todoAddForm.value);
      this.todoService.add(todoModel).subscribe(response=>{
        console.log(response);
      },responseError=>{
        console.log(responseError);
      });
      //window.location.reload();
    } else {
      console.log("Hata");
    }
  }

}
