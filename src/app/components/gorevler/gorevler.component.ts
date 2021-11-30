import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-gorevler',
  templateUrl: './gorevler.component.html',
  styleUrls: ['./gorevler.component.css']
})
export class GorevlerComponent implements OnInit {
  todos:Todo[]=[];
  dataLoaded:boolean=false;
  filterText:string="";

  constructor(private todoService:TodoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getTodosByCategory(params["categoryId"])
      }else{
        this.getTodos()
      }
    })
  }

  getTodos(){
    this.todoService.getTodos().subscribe((response)=>{
      this.todos=response.data;
      this.dataLoaded=true;
      //this.dataLoaded=response.success;
      console.log(response);
    })
  }

  getTodosByCategory(categoryId:number){
    this.todoService.getTodosByCategory(categoryId).subscribe((response)=>{
      this.todos=response.data;
      console.log(response);
      //this.dataLoaded=true;
      this.dataLoaded=response.success;
    })
  }

}
