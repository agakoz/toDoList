import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksList: Array<Task> = [];
  private doneList: Array<Task> = [];

  private obsTaskList = new BehaviorSubject<Array<Task>>([]);
  private obsDoneList = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Zmywanie', created: new Date()},
      {name: 'Nauka', created: new Date()},
      {name: 'Zakupy', created: new Date()},
      {name: 'Podlewanie kwiatków', created: new Date()}];

    this.obsTaskList.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.obsTaskList.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.obsTaskList.next(this.tasksList);
  }

  done(task: Task) {
    this.doneList.push(task);
    this.remove(task);
    this.obsDoneList.next(this.doneList);
  }

  getObsTaskList(): Observable<Array<Task>> {
    return this.obsTaskList.asObservable();
  }

  getObsDoneList(): Observable<Array<Task>> {
    return this.obsDoneList.asObservable();
  }
}
