import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];
  noTaskMessage = 'No task to do, take some rest!';

  constructor(private taskService: TaskService) {
    this.taskService.getObsTaskList().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  done(task: Task) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
