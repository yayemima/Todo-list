
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interface/to-do';
@Component({
  selector: 'todo-list',
  templateUrl: './Todo-list.component.html',
  styleUrls: ['./Todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = 'My To-Do List';    // it's getting used in html file

  todoList: ToDo[] = [];

    filteredIndexes: number[] = [];
  filteredList: ToDo[] = [];

  completedTodos: ToDo[] = [];
  
  constructor() {
      this.todoList = [
        {
          task: 'Jogging',
          completed: false,
        },
        {
          task: 'Swimming',
          completed: false,
        },
        {
          task: ' Reading',
          completed: false,
        },
        {
          task: 'Cleaning',
          completed: false,
        },
      ];
  }

  ngOnInit(): void {}

  // addTodo function will keep existing 'todoList' array and add 'todo'  in it  : 
  addTodo(todo: ToDo): void {
    this.todoList = [...this.todoList, todo];
  }

  // removeTodo function will map the index and then splice value using that index :
  removeTodo(todoIn: string): void {
        console.log('removeTodo: ' + todoIn);
        let index = 0;

    this.todoList.map((todo, i) => {
      if (todo.task === todoIn) {
        index = i;
      }
      return index;
    });
    this.todoList.splice(index, 1);
  }

  //completeTodo function will give true value to completed tasks and add in tpo array :
  completeTodo(todo: string, i: number): void {
        let tempTodo = {
          task: todo,
          completed: true,
        };

       console.log(this.todoList[i]);
    
    this.todoList[i].completed = !this.todoList[i].completed;

    this.completedTodos = [...this.completedTodos, tempTodo];
  }

  searchList(search: string) {
        this.filteredIndexes = [];
    
    if (search === '') {
      console.log('search empty');
    } else {
      this.todoList.forEach((todo, i) => {
        !todo.task.toLowerCase().includes(search.toLowerCase()) &&
          this.filteredIndexes.push(i);
      });
      // console.log(this.filteredIndexes);
    }
  }




}