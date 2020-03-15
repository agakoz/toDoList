import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneList: Array<string> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getObsDoneList().subscribe((tasks: Array<string>) => {
      this.doneList = tasks;
    });
  }

  ngOnInit(): void {
  }

}
