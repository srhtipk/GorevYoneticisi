import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.component.html',
  styleUrls: ['./todo-add-update.component.css']
})
export class TodoAddUpdateComponent implements OnInit {
  todoAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createtodoAddForm();
  }

  createtodoAddForm(){
    this.todoAddForm=this.formBuilder.group({
      todoName:["",Validators.required],
      categoryId:["",Validators.required],
      isCompleted:["",Validators.required]
      
    })
  }

  add(){
    console.log("add çalıştı.");
  }

}
