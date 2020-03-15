import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.taskService.add(this.newTask);
    this.newTask = '';
  }

}
