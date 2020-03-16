import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneList: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getObsDoneList().subscribe((tasks: Array<Task>) => {
      this.doneList = tasks;
    });
  }

  ngOnInit(): void {
  }

}
