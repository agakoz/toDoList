import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  add() {
    const task: Task = ({name: this.newTask, created: new Date()});
    this.taskService.add(task);
    this.newTask = '';
  }

}
