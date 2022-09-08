import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ToDo } from 'src/app/interface/to-do';



@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() complete = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();


  constructor() {
    this.todo = {
      task: '',
      completed: false,
    };
  }

  ngOnInit(): void {}

  completeTask(): void {
    this.complete.emit(this.todo.task);
  }
  removeTask(): void {
    this.remove.emit(this.todo.task);
  }
}
