import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDoListYTProject';

  tasksList: Array<string> = [];
  doneList: Array<string> = [];

  add(task: string) {
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }

  ngOnInit(): void {
    this.tasksList = ['Zmywanie', 'Nauka', 'Zakupy', 'Podlewanie kwiatków' ];
  }
}
