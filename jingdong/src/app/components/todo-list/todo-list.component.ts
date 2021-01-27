import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public keywords:string='';
  public TodoList:any[]=[];
  constructor(public storage:StorageService) {
   
  }

  ngOnInit() {
    let todolist:any=this.storage.get('todolist');
    if(todolist){
      this.TodoList=todolist;
    }
  }
  doAdd(e){
    if(e.keyCode==13){
      if(!this.TodoListHaskeywords(this.TodoList,this.keywords)){
        console.log(this.TodoList.indexOf(this.keywords));
        this.TodoList.push({
          title:this.keywords,
          status:false
        });
        this.storage.set('todolist',this.TodoList);     
      }else{
        alert('数据已经存在！');
      }
      this.keywords='';
    }
  }
  Del(key:any){
    this.TodoList.splice(key,1);
    this.storage.set('todolist',this.TodoList);
  }

  TodoListHaskeywords(TodoList:any[],keywords:any){
    let flag:boolean=false;
    TodoList.forEach(value => {
      if(value.title==keywords){
        flag=true;
      }
    });
    return flag;
  }

  checkboxchange(){
    this.storage.set('todolist',this.TodoList);
  }
}
